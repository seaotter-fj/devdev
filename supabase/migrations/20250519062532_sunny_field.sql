/*
  # Update posts table RLS policies

  1. Changes
    - Modified RLS policies to allow public reading of posts
    - Maintained creator-only access for create/update/delete operations

  2. Security
    - All authenticated users can now read all posts
    - Only post creators can modify their own posts
*/

-- Update the SELECT policy to allow any authenticated user to read posts
DROP POLICY IF EXISTS "Users can read own posts" ON posts;
CREATE POLICY "Anyone can read posts"
  ON posts
  FOR SELECT
  TO authenticated
  USING (true);

-- Keep existing policies for other operations
-- Note: These are already set up correctly in previous migrations