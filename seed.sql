-- Clear existing data (optional, comment out if you want to keep existing data)
DELETE FROM users;
DELETE FROM email_logs;

-- Insert sample users
INSERT INTO users (name, email) VALUES
('John Doe', 'john.doe@example.com'),
('Jane Smith', 'jane.smith@example.com'),
('Alice Johnson', 'alice.johnson@example.com');

-- Insert sample email logs
INSERT INTO email_logs (recipient_email, subject, sent_at) VALUES
('john.doe@example.com', 'Welcome to Astro', '2025-06-27T13:00:00Z'),
('jane.smith@example.com', 'Test Email', '2025-06-27T13:15:00Z'),
('alice.johnson@example.com', 'Newsletter Signup', '2025-06-27T13:30:00Z');