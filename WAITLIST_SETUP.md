# Waitlist System Setup Guide (Supabase)

This guide explains how to set up the custom waitlist system using Supabase.

## Supabase Setup

### 1. Environment Variables

Add the following environment variable to your `.env.local` file:

```bash
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
```

You can find your anon key in your Supabase project settings under API.

### 2. Database Table Creation

Run the following SQL commands in your Supabase SQL editor to create the required table:

```sql
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
```

You can also use the provided `database-setup.sql` file.

### 3. Row Level Security (RLS)

If you want to enable RLS for security, add these policies:

```sql
-- Enable RLS
ALTER TABLE "mistri-waitlist" ENABLE ROW LEVEL SECURITY;

-- Allow inserts for anyone (for waitlist signups)
CREATE POLICY "Allow public inserts" ON "mistri-waitlist"
    FOR INSERT WITH CHECK (true);

-- Allow reads for authenticated users (for admin dashboard)
CREATE POLICY "Allow authenticated reads" ON "mistri-waitlist"
    FOR SELECT USING (auth.role() = 'authenticated');
```

## Features

### 1. Waitlist Form (`/waitlist`)
- Custom form with name and email fields
- Real-time validation
- Success/error notifications
- Responsive design
- Stores data directly in Supabase

### 2. Admin Dashboard (`/admin/waitlist`)
- View all waitlist entries
- Sort by join date
- Real-time data updates
- No authentication required (you can add it later)

### 3. Supabase Integration

The system uses Supabase client for:
- **Data Insertion**: Adding new waitlist entries
- **Data Retrieval**: Fetching all entries for admin
- **Duplicate Prevention**: Checking for existing emails
- **Real-time Updates**: Automatic data synchronization

## Dependencies

The following packages have been added:
- `@supabase/supabase-js` - Supabase JavaScript client

## File Structure

```
mistri-website/
├── lib/
│   └── supabase.ts              # Supabase client configuration
├── app/
│   ├── waitlist/
│   │   └── page.tsx             # Waitlist form
│   └── admin/
│       └── waitlist/
│           └── page.tsx         # Admin dashboard
├── database-setup.sql           # Database setup script
└── WAITLIST_SETUP.md           # This file
```

## Usage

1. **For Users**: Visit `/waitlist` to join the waitlist
2. **For Admins**: Visit `/admin/waitlist` to view all entries

## Security Features

- Email validation
- Duplicate email prevention
- Supabase built-in security
- Row Level Security (optional)
- Input sanitization

## Customization

You can easily customize:
- Form fields (add company, phone, etc.)
- Validation rules
- Success/error messages
- Admin dashboard layout
- Email notifications (can be added via Supabase Edge Functions)

## Troubleshooting

### Common Issues

1. **Supabase Connection Error**
   - Check your `NEXT_PUBLIC_SUPABASE_ANON_KEY` environment variable
   - Ensure the Supabase project is active
   - Verify the table exists in your database

2. **Table Not Found**
   - Run the database setup script in Supabase SQL editor
   - Check table permissions

3. **Duplicate Email Error**
   - This is expected behavior
   - The system prevents duplicate registrations

4. **RLS Policy Issues**
   - If you enabled RLS, make sure the policies are correct
   - Check if you need authentication for admin access

### Testing

Test the system by:
1. Submitting the form with valid data
2. Trying to submit with an existing email
3. Submitting with invalid email format
4. Checking the admin dashboard for new entries

## Advantages of Supabase

- **No Server Setup**: Direct client-to-database communication
- **Built-in Security**: Row Level Security, authentication, etc.
- **Real-time**: Automatic data synchronization
- **Scalable**: Handles traffic automatically
- **Easy Management**: Web-based dashboard for data management
