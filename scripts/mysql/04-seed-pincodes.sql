-- Seed sample Indian pin codes (major cities)
INSERT INTO pincodes (pincode, area, district, state) VALUES
-- Mumbai
('400001', 'Fort', 'Mumbai City', 'Maharashtra'),
('400002', 'Kalbadevi', 'Mumbai City', 'Maharashtra'),
('400051', 'Bandra West', 'Mumbai Suburban', 'Maharashtra'),
('400052', 'Bandra East', 'Mumbai Suburban', 'Maharashtra'),
('400053', 'Andheri East', 'Mumbai Suburban', 'Maharashtra'),
('400058', 'Andheri West', 'Mumbai Suburban', 'Maharashtra'),
('400070', 'Worli', 'Mumbai City', 'Maharashtra'),
('400080', 'Ghatkopar', 'Mumbai Suburban', 'Maharashtra'),

-- Delhi
('110001', 'Connaught Place', 'Central Delhi', 'Delhi'),
('110002', 'Daryaganj', 'Central Delhi', 'Delhi'),
('110016', 'Lajpat Nagar', 'South Delhi', 'Delhi'),
('110017', 'Defence Colony', 'South Delhi', 'Delhi'),
('110019', 'Nehru Place', 'South Delhi', 'Delhi'),
('110025', 'Karol Bagh', 'Central Delhi', 'Delhi'),
('110065', 'Rohini', 'North West Delhi', 'Delhi'),
('110092', 'Dwarka', 'South West Delhi', 'Delhi'),

-- Bangalore
('560001', 'Bangalore City', 'Bangalore Urban', 'Karnataka'),
('560002', 'Bangalore City', 'Bangalore Urban', 'Karnataka'),
('560034', 'Indiranagar', 'Bangalore Urban', 'Karnataka'),
('560038', 'Jayanagar', 'Bangalore Urban', 'Karnataka'),
('560066', 'Whitefield', 'Bangalore Urban', 'Karnataka'),
('560076', 'Electronic City', 'Bangalore Urban', 'Karnataka'),
('560100', 'Koramangala', 'Bangalore Urban', 'Karnataka'),

-- Hyderabad
('500001', 'Abids', 'Hyderabad', 'Telangana'),
('500003', 'Kachiguda', 'Hyderabad', 'Telangana'),
('500016', 'Himayatnagar', 'Hyderabad', 'Telangana'),
('500034', 'Banjara Hills', 'Hyderabad', 'Telangana'),
('500081', 'Madhapur', 'Hyderabad', 'Telangana'),
('500084', 'Gachibowli', 'Hyderabad', 'Telangana'),

-- Chennai
('600001', 'Parrys', 'Chennai', 'Tamil Nadu'),
('600002', 'Sowcarpet', 'Chennai', 'Tamil Nadu'),
('600017', 'T Nagar', 'Chennai', 'Tamil Nadu'),
('600018', 'Kodambakkam', 'Chennai', 'Tamil Nadu'),
('600028', 'Mylapore', 'Chennai', 'Tamil Nadu'),
('600096', 'Velachery', 'Chennai', 'Tamil Nadu'),

-- Kolkata
('700001', 'BBD Bagh', 'Kolkata', 'West Bengal'),
('700016', 'Park Street', 'Kolkata', 'West Bengal'),
('700019', 'Ballygunge', 'Kolkata', 'West Bengal'),
('700027', 'Gariahat', 'Kolkata', 'West Bengal'),
('700091', 'Salt Lake', 'Kolkata', 'West Bengal')
ON DUPLICATE KEY UPDATE area=VALUES(area);
