/*
  # Add foreign key relationship between posts and profiles tables

  1. Changes
    - Add foreign key constraint from posts.user_id to profiles.id
    This will allow joining posts with profiles to get author information

  2. Notes
    - Using IF NOT EXISTS to prevent errors if constraint already exists
    - Using DO block to safely check and add the constraint
*/

DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 
    FROM information_schema.table_constraints 
    WHERE constraint_name = 'posts_user_id_profiles_fkey'
  ) THEN
    ALTER TABLE posts
    ADD CONSTRAINT posts_user_id_profiles_fkey
    FOREIGN KEY (user_id) REFERENCES profiles(id);
  END IF;
END $$;