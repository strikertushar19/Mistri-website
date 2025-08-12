-- Create the mistri-waitlist table
CREATE TABLE IF NOT EXISTS "mistri-waitlist" (
    "Id" SERIAL PRIMARY KEY,
    "Name" VARCHAR(255) NOT NULL,
    "Email" VARCHAR(255) NOT NULL UNIQUE,
    "Created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Create an index on email for faster lookups
CREATE INDEX IF NOT EXISTS idx_mistri_waitlist_email ON "mistri-waitlist"("Email");

-- Create an index on created_at for sorting
CREATE INDEX IF NOT EXISTS idx_mistri_waitlist_created_at ON "mistri-waitlist"("Created_at");

-- Add some sample data (optional)
-- INSERT INTO mistri_waitlist (name, email) VALUES 
-- ('John Doe', 'john@example.com'),
-- ('Jane Smith', 'jane@example.com');
