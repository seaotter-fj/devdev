/*
  # Add admin role and update post deletion policies

  1. Changes
    - Add is_admin column to profiles table
    - Update RLS policies for post deletion

  2. Security
    - Only admins and post owners can delete posts
    - Maintains existing read/write policies
*/

-- Add is_admin column to profiles table
ALTER TABLE profiles 
ADD COLUMN IF NOT EXISTS is_admin boolean DEFAULT false;

-- Update deletion policy for posts
DROP POLICY IF EXISTS "Users can delete own posts" ON posts;
CREATE POLICY "Admins and owners can delete posts"
  ON posts
  FOR DELETE
  TO authenticated
  USING (
    auth.uid() = user_id OR 
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() 
      AND is_admin = true
    )
  );