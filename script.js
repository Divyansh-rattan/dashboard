// ============================================================
// STEP 1: THE DATA
// These rows are copied from data/retail_sales_clean.csv (made by
// python/analysis.py). A browser cannot read a CSV file straight
// from disk, so the data lives here as a JavaScript list.
// ============================================================
const salesData = [
  {"Order_ID": "ORD1001", "Order_Date": "2025-01-01", "Product": "Chocolate Bar", "Category": "Snacks", "Quantity": 13, "Unit_Price": 50, "Stock": 95},
  {"Order_ID": "ORD1002", "Order_Date": "2025-01-01", "Product": "Bath Soap 4-pack", "Category": "Personal Care", "Quantity": 2, "Unit_Price": 180, "Stock": 55},
  {"Order_ID": "ORD1003", "Order_Date": "2025-01-02", "Product": "Potato Chips", "Category": "Snacks", "Quantity": 5, "Unit_Price": 20, "Stock": 150},
  {"Order_ID": "ORD1004", "Order_Date": "2025-01-05", "Product": "Toor Dal 1kg", "Category": "Groceries", "Quantity": 6, "Unit_Price": 155, "Stock": 40},
  {"Order_ID": "ORD1005", "Order_Date": "2025-01-08", "Product": "Wheat Flour 10kg", "Category": "Groceries", "Quantity": 1, "Unit_Price": 410, "Stock": 60},
  {"Order_ID": "ORD1006", "Order_Date": "2025-01-11", "Product": "Chocolate Bar", "Category": "Snacks", "Quantity": 13, "Unit_Price": 50, "Stock": 95},
  {"Order_ID": "ORD1007", "Order_Date": "2025-01-13", "Product": "Wheat Flour 10kg", "Category": "Groceries", "Quantity": 1, "Unit_Price": 410, "Stock": 60},
  {"Order_ID": "ORD1008", "Order_Date": "2025-01-19", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 3, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1009", "Order_Date": "2025-01-23", "Product": "Potato Chips", "Category": "Snacks", "Quantity": 18, "Unit_Price": 20, "Stock": 150},
  {"Order_ID": "ORD1010", "Order_Date": "2025-01-24", "Product": "Wheat Flour 10kg", "Category": "Groceries", "Quantity": 1, "Unit_Price": 410, "Stock": 60},
  {"Order_ID": "ORD1011", "Order_Date": "2025-01-31", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 3, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1012", "Order_Date": "2025-02-02", "Product": "Toor Dal 1kg", "Category": "Groceries", "Quantity": 6, "Unit_Price": 155, "Stock": 40},
  {"Order_ID": "ORD1013", "Order_Date": "2025-02-04", "Product": "Orange Juice 1L", "Category": "Beverages", "Quantity": 4, "Unit_Price": 120, "Stock": 32},
  {"Order_ID": "ORD1014", "Order_Date": "2025-02-08", "Product": "Basmati Rice 5kg", "Category": "Groceries", "Quantity": 3, "Unit_Price": 520, "Stock": 85},
  {"Order_ID": "ORD1015", "Order_Date": "2025-02-10", "Product": "Basmati Rice 5kg", "Category": "Groceries", "Quantity": 3, "Unit_Price": 520, "Stock": 85},
  {"Order_ID": "ORD1016", "Order_Date": "2025-02-12", "Product": "Tea Powder 500g", "Category": "Beverages", "Quantity": 5, "Unit_Price": 230, "Stock": 9},
  {"Order_ID": "ORD1017", "Order_Date": "2025-02-23", "Product": "Potato Chips", "Category": "Snacks", "Quantity": 7, "Unit_Price": 20, "Stock": 150},
  {"Order_ID": "ORD1018", "Order_Date": "2025-02-28", "Product": "Floor Cleaner 1L", "Category": "Household", "Quantity": 2, "Unit_Price": 190, "Stock": 42},
  {"Order_ID": "ORD1019", "Order_Date": "2025-03-02", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 3, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1020", "Order_Date": "2025-03-06", "Product": "Potato Chips", "Category": "Snacks", "Quantity": 12, "Unit_Price": 20, "Stock": 150},
  {"Order_ID": "ORD1021", "Order_Date": "2025-03-12", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 2, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1022", "Order_Date": "2025-03-13", "Product": "Toothpaste 200g", "Category": "Personal Care", "Quantity": 3, "Unit_Price": 110, "Stock": 80},
  {"Order_ID": "ORD1023", "Order_Date": "2025-03-13", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 3, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1024", "Order_Date": "2025-03-21", "Product": "Floor Cleaner 1L", "Category": "Household", "Quantity": 6, "Unit_Price": 190, "Stock": 42},
  {"Order_ID": "ORD1025", "Order_Date": "2025-03-22", "Product": "Potato Chips", "Category": "Snacks", "Quantity": 15, "Unit_Price": 20, "Stock": 150},
  {"Order_ID": "ORD1026", "Order_Date": "2025-03-23", "Product": "Chocolate Bar", "Category": "Snacks", "Quantity": 7, "Unit_Price": 50, "Stock": 95},
  {"Order_ID": "ORD1027", "Order_Date": "2025-03-25", "Product": "Shampoo 340ml", "Category": "Personal Care", "Quantity": 1, "Unit_Price": 260, "Stock": 7},
  {"Order_ID": "ORD1028", "Order_Date": "2025-03-27", "Product": "Orange Juice 1L", "Category": "Beverages", "Quantity": 3, "Unit_Price": 120, "Stock": 32},
  {"Order_ID": "ORD1029", "Order_Date": "2025-04-03", "Product": "Tea Powder 500g", "Category": "Beverages", "Quantity": 2, "Unit_Price": 230, "Stock": 9},
  {"Order_ID": "ORD1030", "Order_Date": "2025-04-05", "Product": "Wheat Flour 10kg", "Category": "Groceries", "Quantity": 2, "Unit_Price": 410, "Stock": 60},
  {"Order_ID": "ORD1031", "Order_Date": "2025-04-05", "Product": "Tea Powder 500g", "Category": "Beverages", "Quantity": 5, "Unit_Price": 230, "Stock": 9},
  {"Order_ID": "ORD1032", "Order_Date": "2025-04-05", "Product": "Toothpaste 200g", "Category": "Personal Care", "Quantity": 6, "Unit_Price": 110, "Stock": 80},
  {"Order_ID": "ORD1033", "Order_Date": "2025-04-14", "Product": "Salted Biscuits", "Category": "Snacks", "Quantity": 17, "Unit_Price": 35, "Stock": 11},
  {"Order_ID": "ORD1034", "Order_Date": "2025-04-16", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 4, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1035", "Order_Date": "2025-04-18", "Product": "Salted Biscuits", "Category": "Snacks", "Quantity": 13, "Unit_Price": 35, "Stock": 11},
  {"Order_ID": "ORD1036", "Order_Date": "2025-04-19", "Product": "Detergent Powder 2kg", "Category": "Household", "Quantity": 3, "Unit_Price": 340, "Stock": 38},
  {"Order_ID": "ORD1037", "Order_Date": "2025-04-21", "Product": "Toothpaste 200g", "Category": "Personal Care", "Quantity": 4, "Unit_Price": 110, "Stock": 80},
  {"Order_ID": "ORD1038", "Order_Date": "2025-04-22", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 4, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1039", "Order_Date": "2025-04-25", "Product": "Cola 2L", "Category": "Beverages", "Quantity": 1, "Unit_Price": 95, "Stock": 70},
  {"Order_ID": "ORD1040", "Order_Date": "2025-05-04", "Product": "Chocolate Bar", "Category": "Snacks", "Quantity": 13, "Unit_Price": 50, "Stock": 95},
  {"Order_ID": "ORD1041", "Order_Date": "2025-05-04", "Product": "Cola 2L", "Category": "Beverages", "Quantity": 6, "Unit_Price": 95, "Stock": 70},
  {"Order_ID": "ORD1042", "Order_Date": "2025-05-06", "Product": "Sugar 1kg", "Category": "Groceries", "Quantity": 19, "Unit_Price": 48, "Stock": 120},
  {"Order_ID": "ORD1043", "Order_Date": "2025-05-11", "Product": "Bath Soap 4-pack", "Category": "Personal Care", "Quantity": 1, "Unit_Price": 180, "Stock": 55},
  {"Order_ID": "ORD1044", "Order_Date": "2025-05-13", "Product": "Potato Chips", "Category": "Snacks", "Quantity": 17, "Unit_Price": 20, "Stock": 150},
  {"Order_ID": "ORD1045", "Order_Date": "2025-05-15", "Product": "Potato Chips", "Category": "Snacks", "Quantity": 13, "Unit_Price": 20, "Stock": 150},
  {"Order_ID": "ORD1046", "Order_Date": "2025-05-21", "Product": "Sugar 1kg", "Category": "Groceries", "Quantity": 11, "Unit_Price": 48, "Stock": 120},
  {"Order_ID": "ORD1047", "Order_Date": "2025-05-24", "Product": "Basmati Rice 5kg", "Category": "Groceries", "Quantity": 3, "Unit_Price": 520, "Stock": 85},
  {"Order_ID": "ORD1048", "Order_Date": "2025-05-25", "Product": "Dishwash Liquid 500ml", "Category": "Household", "Quantity": 2, "Unit_Price": 125, "Stock": 18},
  {"Order_ID": "ORD1049", "Order_Date": "2025-05-25", "Product": "Wheat Flour 10kg", "Category": "Groceries", "Quantity": 2, "Unit_Price": 410, "Stock": 60},
  {"Order_ID": "ORD1050", "Order_Date": "2025-05-28", "Product": "Dishwash Liquid 500ml", "Category": "Household", "Quantity": 1, "Unit_Price": 125, "Stock": 18},
  {"Order_ID": "ORD1051", "Order_Date": "2025-06-03", "Product": "Dishwash Liquid 500ml", "Category": "Household", "Quantity": 6, "Unit_Price": 125, "Stock": 18},
  {"Order_ID": "ORD1052", "Order_Date": "2025-06-03", "Product": "Cola 2L", "Category": "Beverages", "Quantity": 5, "Unit_Price": 95, "Stock": 70},
  {"Order_ID": "ORD1053", "Order_Date": "2025-06-04", "Product": "Cola 2L", "Category": "Beverages", "Quantity": 3, "Unit_Price": 95, "Stock": 70},
  {"Order_ID": "ORD1054", "Order_Date": "2025-06-05", "Product": "Bath Soap 4-pack", "Category": "Personal Care", "Quantity": 6, "Unit_Price": 180, "Stock": 55},
  {"Order_ID": "ORD1055", "Order_Date": "2025-06-08", "Product": "Toor Dal 1kg", "Category": "Groceries", "Quantity": 5, "Unit_Price": 155, "Stock": 40},
  {"Order_ID": "ORD1056", "Order_Date": "2025-06-18", "Product": "Orange Juice 1L", "Category": "Beverages", "Quantity": 2, "Unit_Price": 120, "Stock": 32},
  {"Order_ID": "ORD1057", "Order_Date": "2025-06-20", "Product": "Detergent Powder 2kg", "Category": "Household", "Quantity": 3, "Unit_Price": 340, "Stock": 38},
  {"Order_ID": "ORD1058", "Order_Date": "2025-06-25", "Product": "Cola 2L", "Category": "Beverages", "Quantity": 5, "Unit_Price": 95, "Stock": 70},
  {"Order_ID": "ORD1059", "Order_Date": "2025-06-27", "Product": "Toothpaste 200g", "Category": "Personal Care", "Quantity": 3, "Unit_Price": 110, "Stock": 80},
  {"Order_ID": "ORD1060", "Order_Date": "2025-06-28", "Product": "Toor Dal 1kg", "Category": "Groceries", "Quantity": 5, "Unit_Price": 155, "Stock": 40},
  {"Order_ID": "ORD1061", "Order_Date": "2025-07-01", "Product": "Potato Chips", "Category": "Snacks", "Quantity": 7, "Unit_Price": 20, "Stock": 150},
  {"Order_ID": "ORD1062", "Order_Date": "2025-07-02", "Product": "Salted Biscuits", "Category": "Snacks", "Quantity": 12, "Unit_Price": 35, "Stock": 11},
  {"Order_ID": "ORD1063", "Order_Date": "2025-07-02", "Product": "Basmati Rice 5kg", "Category": "Groceries", "Quantity": 3, "Unit_Price": 520, "Stock": 85},
  {"Order_ID": "ORD1064", "Order_Date": "2025-07-07", "Product": "Instant Coffee 100g", "Category": "Beverages", "Quantity": 2, "Unit_Price": 310, "Stock": 45},
  {"Order_ID": "ORD1065", "Order_Date": "2025-07-08", "Product": "Wheat Flour 10kg", "Category": "Groceries", "Quantity": 1, "Unit_Price": 410, "Stock": 60},
  {"Order_ID": "ORD1066", "Order_Date": "2025-07-08", "Product": "Basmati Rice 5kg", "Category": "Groceries", "Quantity": 3, "Unit_Price": 520, "Stock": 85},
  {"Order_ID": "ORD1067", "Order_Date": "2025-07-13", "Product": "Salted Biscuits", "Category": "Snacks", "Quantity": 16, "Unit_Price": 35, "Stock": 11},
  {"Order_ID": "ORD1068", "Order_Date": "2025-07-17", "Product": "Orange Juice 1L", "Category": "Beverages", "Quantity": 4, "Unit_Price": 120, "Stock": 32},
  {"Order_ID": "ORD1069", "Order_Date": "2025-07-19", "Product": "Sugar 1kg", "Category": "Groceries", "Quantity": 12, "Unit_Price": 48, "Stock": 120},
  {"Order_ID": "ORD1070", "Order_Date": "2025-08-04", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 6, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1071", "Order_Date": "2025-08-04", "Product": "Bath Soap 4-pack", "Category": "Personal Care", "Quantity": 2, "Unit_Price": 180, "Stock": 55},
  {"Order_ID": "ORD1072", "Order_Date": "2025-08-06", "Product": "Wheat Flour 10kg", "Category": "Groceries", "Quantity": 3, "Unit_Price": 410, "Stock": 60},
  {"Order_ID": "ORD1073", "Order_Date": "2025-08-07", "Product": "Chocolate Bar", "Category": "Snacks", "Quantity": 9, "Unit_Price": 50, "Stock": 95},
  {"Order_ID": "ORD1074", "Order_Date": "2025-08-14", "Product": "Instant Coffee 100g", "Category": "Beverages", "Quantity": 4, "Unit_Price": 310, "Stock": 45},
  {"Order_ID": "ORD1075", "Order_Date": "2025-08-16", "Product": "Toor Dal 1kg", "Category": "Groceries", "Quantity": 4, "Unit_Price": 155, "Stock": 40},
  {"Order_ID": "ORD1076", "Order_Date": "2025-08-18", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 4, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1077", "Order_Date": "2025-08-21", "Product": "Chocolate Bar", "Category": "Snacks", "Quantity": 8, "Unit_Price": 50, "Stock": 95},
  {"Order_ID": "ORD1078", "Order_Date": "2025-08-24", "Product": "Orange Juice 1L", "Category": "Beverages", "Quantity": 1, "Unit_Price": 120, "Stock": 32},
  {"Order_ID": "ORD1079", "Order_Date": "2025-08-24", "Product": "Basmati Rice 5kg", "Category": "Groceries", "Quantity": 3, "Unit_Price": 520, "Stock": 85},
  {"Order_ID": "ORD1080", "Order_Date": "2025-08-29", "Product": "Salted Biscuits", "Category": "Snacks", "Quantity": 20, "Unit_Price": 35, "Stock": 11},
  {"Order_ID": "ORD1081", "Order_Date": "2025-09-01", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 4, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1082", "Order_Date": "2025-09-02", "Product": "Sugar 1kg", "Category": "Groceries", "Quantity": 6, "Unit_Price": 48, "Stock": 120},
  {"Order_ID": "ORD1083", "Order_Date": "2025-09-05", "Product": "Salted Biscuits", "Category": "Snacks", "Quantity": 11, "Unit_Price": 35, "Stock": 11},
  {"Order_ID": "ORD1084", "Order_Date": "2025-09-13", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 1, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1085", "Order_Date": "2025-09-16", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 4, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1086", "Order_Date": "2025-09-18", "Product": "Floor Cleaner 1L", "Category": "Household", "Quantity": 6, "Unit_Price": 190, "Stock": 42},
  {"Order_ID": "ORD1087", "Order_Date": "2025-09-21", "Product": "Wheat Flour 10kg", "Category": "Groceries", "Quantity": 1, "Unit_Price": 410, "Stock": 60},
  {"Order_ID": "ORD1088", "Order_Date": "2025-09-23", "Product": "Toor Dal 1kg", "Category": "Groceries", "Quantity": 6, "Unit_Price": 155, "Stock": 40},
  {"Order_ID": "ORD1089", "Order_Date": "2025-09-26", "Product": "Toor Dal 1kg", "Category": "Groceries", "Quantity": 4, "Unit_Price": 155, "Stock": 40},
  {"Order_ID": "ORD1090", "Order_Date": "2025-09-28", "Product": "Orange Juice 1L", "Category": "Beverages", "Quantity": 1, "Unit_Price": 120, "Stock": 32},
  {"Order_ID": "ORD1091", "Order_Date": "2025-09-28", "Product": "Orange Juice 1L", "Category": "Beverages", "Quantity": 5, "Unit_Price": 120, "Stock": 32},
  {"Order_ID": "ORD1092", "Order_Date": "2025-09-30", "Product": "Dishwash Liquid 500ml", "Category": "Household", "Quantity": 2, "Unit_Price": 125, "Stock": 18},
  {"Order_ID": "ORD1093", "Order_Date": "2025-10-02", "Product": "Salted Biscuits", "Category": "Snacks", "Quantity": 6, "Unit_Price": 35, "Stock": 11},
  {"Order_ID": "ORD1094", "Order_Date": "2025-10-03", "Product": "Toothpaste 200g", "Category": "Personal Care", "Quantity": 5, "Unit_Price": 110, "Stock": 80},
  {"Order_ID": "ORD1095", "Order_Date": "2025-10-07", "Product": "Detergent Powder 2kg", "Category": "Household", "Quantity": 3, "Unit_Price": 340, "Stock": 38},
  {"Order_ID": "ORD1096", "Order_Date": "2025-10-07", "Product": "Basmati Rice 5kg", "Category": "Groceries", "Quantity": 3, "Unit_Price": 520, "Stock": 85},
  {"Order_ID": "ORD1097", "Order_Date": "2025-10-10", "Product": "Chocolate Bar", "Category": "Snacks", "Quantity": 19, "Unit_Price": 50, "Stock": 95},
  {"Order_ID": "ORD1098", "Order_Date": "2025-10-12", "Product": "Wheat Flour 10kg", "Category": "Groceries", "Quantity": 1, "Unit_Price": 410, "Stock": 60},
  {"Order_ID": "ORD1099", "Order_Date": "2025-10-12", "Product": "Toothpaste 200g", "Category": "Personal Care", "Quantity": 3, "Unit_Price": 110, "Stock": 80},
  {"Order_ID": "ORD1100", "Order_Date": "2025-10-13", "Product": "Toor Dal 1kg", "Category": "Groceries", "Quantity": 2, "Unit_Price": 155, "Stock": 40},
  {"Order_ID": "ORD1101", "Order_Date": "2025-10-14", "Product": "Potato Chips", "Category": "Snacks", "Quantity": 15, "Unit_Price": 20, "Stock": 150},
  {"Order_ID": "ORD1102", "Order_Date": "2025-10-17", "Product": "Potato Chips", "Category": "Snacks", "Quantity": 10, "Unit_Price": 20, "Stock": 150},
  {"Order_ID": "ORD1103", "Order_Date": "2025-10-17", "Product": "Basmati Rice 5kg", "Category": "Groceries", "Quantity": 1, "Unit_Price": 520, "Stock": 85},
  {"Order_ID": "ORD1104", "Order_Date": "2025-10-20", "Product": "Toor Dal 1kg", "Category": "Groceries", "Quantity": 1, "Unit_Price": 155, "Stock": 40},
  {"Order_ID": "ORD1105", "Order_Date": "2025-10-20", "Product": "Basmati Rice 5kg", "Category": "Groceries", "Quantity": 1, "Unit_Price": 520, "Stock": 85},
  {"Order_ID": "ORD1106", "Order_Date": "2025-10-25", "Product": "Sugar 1kg", "Category": "Groceries", "Quantity": 7, "Unit_Price": 48, "Stock": 120},
  {"Order_ID": "ORD1107", "Order_Date": "2025-10-27", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 5, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1108", "Order_Date": "2025-10-28", "Product": "Basmati Rice 5kg", "Category": "Groceries", "Quantity": 2, "Unit_Price": 520, "Stock": 85},
  {"Order_ID": "ORD1109", "Order_Date": "2025-10-31", "Product": "Tea Powder 500g", "Category": "Beverages", "Quantity": 5, "Unit_Price": 230, "Stock": 9},
  {"Order_ID": "ORD1110", "Order_Date": "2025-11-04", "Product": "Detergent Powder 2kg", "Category": "Household", "Quantity": 2, "Unit_Price": 340, "Stock": 38},
  {"Order_ID": "ORD1111", "Order_Date": "2025-11-04", "Product": "Potato Chips", "Category": "Snacks", "Quantity": 7, "Unit_Price": 20, "Stock": 150},
  {"Order_ID": "ORD1112", "Order_Date": "2025-11-05", "Product": "Salted Biscuits", "Category": "Snacks", "Quantity": 13, "Unit_Price": 35, "Stock": 11},
  {"Order_ID": "ORD1113", "Order_Date": "2025-11-05", "Product": "Potato Chips", "Category": "Snacks", "Quantity": 18, "Unit_Price": 20, "Stock": 150},
  {"Order_ID": "ORD1114", "Order_Date": "2025-11-07", "Product": "Toor Dal 1kg", "Category": "Groceries", "Quantity": 6, "Unit_Price": 155, "Stock": 40},
  {"Order_ID": "ORD1115", "Order_Date": "2025-11-09", "Product": "Cola 2L", "Category": "Beverages", "Quantity": 1, "Unit_Price": 95, "Stock": 70},
  {"Order_ID": "ORD1116", "Order_Date": "2025-11-09", "Product": "Chocolate Bar", "Category": "Snacks", "Quantity": 10, "Unit_Price": 50, "Stock": 95},
  {"Order_ID": "ORD1117", "Order_Date": "2025-11-10", "Product": "Wheat Flour 10kg", "Category": "Groceries", "Quantity": 3, "Unit_Price": 410, "Stock": 60},
  {"Order_ID": "ORD1118", "Order_Date": "2025-11-11", "Product": "Basmati Rice 5kg", "Category": "Groceries", "Quantity": 2, "Unit_Price": 520, "Stock": 85},
  {"Order_ID": "ORD1119", "Order_Date": "2025-11-14", "Product": "Wheat Flour 10kg", "Category": "Groceries", "Quantity": 3, "Unit_Price": 410, "Stock": 60},
  {"Order_ID": "ORD1120", "Order_Date": "2025-11-18", "Product": "Chocolate Bar", "Category": "Snacks", "Quantity": 14, "Unit_Price": 50, "Stock": 95},
  {"Order_ID": "ORD1121", "Order_Date": "2025-11-18", "Product": "Salted Biscuits", "Category": "Snacks", "Quantity": 18, "Unit_Price": 35, "Stock": 11},
  {"Order_ID": "ORD1122", "Order_Date": "2025-11-20", "Product": "Salted Biscuits", "Category": "Snacks", "Quantity": 5, "Unit_Price": 35, "Stock": 11},
  {"Order_ID": "ORD1123", "Order_Date": "2025-11-22", "Product": "Sugar 1kg", "Category": "Groceries", "Quantity": 13, "Unit_Price": 48, "Stock": 120},
  {"Order_ID": "ORD1124", "Order_Date": "2025-11-23", "Product": "Dishwash Liquid 500ml", "Category": "Household", "Quantity": 2, "Unit_Price": 125, "Stock": 18},
  {"Order_ID": "ORD1125", "Order_Date": "2025-11-26", "Product": "Detergent Powder 2kg", "Category": "Household", "Quantity": 1, "Unit_Price": 340, "Stock": 38},
  {"Order_ID": "ORD1126", "Order_Date": "2025-11-27", "Product": "Potato Chips", "Category": "Snacks", "Quantity": 16, "Unit_Price": 20, "Stock": 150},
  {"Order_ID": "ORD1127", "Order_Date": "2025-11-29", "Product": "Toor Dal 1kg", "Category": "Groceries", "Quantity": 1, "Unit_Price": 155, "Stock": 40},
  {"Order_ID": "ORD1128", "Order_Date": "2025-12-01", "Product": "Toothpaste 200g", "Category": "Personal Care", "Quantity": 2, "Unit_Price": 110, "Stock": 80},
  {"Order_ID": "ORD1129", "Order_Date": "2025-12-04", "Product": "Bath Soap 4-pack", "Category": "Personal Care", "Quantity": 4, "Unit_Price": 180, "Stock": 55},
  {"Order_ID": "ORD1130", "Order_Date": "2025-12-07", "Product": "Detergent Powder 2kg", "Category": "Household", "Quantity": 2, "Unit_Price": 340, "Stock": 38},
  {"Order_ID": "ORD1131", "Order_Date": "2025-12-08", "Product": "Detergent Powder 2kg", "Category": "Household", "Quantity": 2, "Unit_Price": 340, "Stock": 38},
  {"Order_ID": "ORD1132", "Order_Date": "2025-12-09", "Product": "Bath Soap 4-pack", "Category": "Personal Care", "Quantity": 2, "Unit_Price": 180, "Stock": 55},
  {"Order_ID": "ORD1133", "Order_Date": "2025-12-09", "Product": "Tea Powder 500g", "Category": "Beverages", "Quantity": 1, "Unit_Price": 230, "Stock": 9},
  {"Order_ID": "ORD1134", "Order_Date": "2025-12-11", "Product": "Salted Biscuits", "Category": "Snacks", "Quantity": 18, "Unit_Price": 35, "Stock": 11},
  {"Order_ID": "ORD1135", "Order_Date": "2025-12-12", "Product": "Chocolate Bar", "Category": "Snacks", "Quantity": 18, "Unit_Price": 50, "Stock": 95},
  {"Order_ID": "ORD1136", "Order_Date": "2025-12-22", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 2, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1137", "Order_Date": "2025-12-24", "Product": "Floor Cleaner 1L", "Category": "Household", "Quantity": 2, "Unit_Price": 190, "Stock": 42},
  {"Order_ID": "ORD1138", "Order_Date": "2025-12-26", "Product": "Floor Cleaner 1L", "Category": "Household", "Quantity": 2, "Unit_Price": 190, "Stock": 42},
  {"Order_ID": "ORD1139", "Order_Date": "2025-12-27", "Product": "Sunflower Oil 1L", "Category": "Groceries", "Quantity": 4, "Unit_Price": 165, "Stock": 14},
  {"Order_ID": "ORD1140", "Order_Date": "2025-12-27", "Product": "Sugar 1kg", "Category": "Groceries", "Quantity": 12, "Unit_Price": 48, "Stock": 120},
  {"Order_ID": "ORD1141", "Order_Date": "2025-12-28", "Product": "Bath Soap 4-pack", "Category": "Personal Care", "Quantity": 6, "Unit_Price": 180, "Stock": 55},
  {"Order_ID": "ORD1142", "Order_Date": "2025-12-28", "Product": "Toothpaste 200g", "Category": "Personal Care", "Quantity": 4, "Unit_Price": 110, "Stock": 80}
];

// ============================================================
// STEP 2: CALCULATE THE NUMBERS (same logic as python/analysis.py)
// ============================================================

// Add a Revenue value to every row: Revenue = Quantity x Unit_Price
salesData.forEach(function (row) {
  row.Revenue = row.Quantity * row.Unit_Price;
});

// Small helper: add up a value for each group (like pandas groupby + sum)
function sumBy(groupField, valueField) {
  const totals = {};
  salesData.forEach(function (row) {
    const key = row[groupField];
    totals[key] = (totals[key] || 0) + row[valueField];
  });
  return totals;
}

// Helper: turn { name: value } into a sorted list, biggest first
function sortedEntries(totals) {
  return Object.entries(totals).sort(function (a, b) { return b[1] - a[1]; });
}

const money = function (n) { return "\u20B9" + n.toLocaleString("en-IN"); };

// KPI numbers
let totalRevenue = 0;
let totalUnits = 0;
salesData.forEach(function (row) {
  totalRevenue += row.Revenue;
  totalUnits += row.Quantity;
});
const totalOrders = salesData.length;

// Group totals
const unitsByProduct = sortedEntries(sumBy("Product", "Quantity"));
const revenueByCategory = sortedEntries(sumBy("Category", "Revenue"));

// Monthly revenue: "2025-03-14" -> "2025-03"
salesData.forEach(function (row) { row.Month = row.Order_Date.slice(0, 7); });
const monthlyTotals = sumBy("Month", "Revenue");
const months = Object.keys(monthlyTotals).sort();

// Low stock: one stock value per product, keep those below the limit
const LOW_STOCK_LIMIT = 20;
const stockByProduct = {};
salesData.forEach(function (row) {
  stockByProduct[row.Product] = { stock: row.Stock, category: row.Category };
});
const lowStock = Object.entries(stockByProduct)
  .filter(function (item) { return item[1].stock < LOW_STOCK_LIMIT; })
  .sort(function (a, b) { return a[1].stock - b[1].stock; });

// ============================================================
// STEP 3: SHOW KPI CARDS
// ============================================================
document.getElementById("kpi-revenue").textContent = money(totalRevenue);
document.getElementById("kpi-orders").textContent = totalOrders;
document.getElementById("kpi-units").textContent = totalUnits.toLocaleString("en-IN");
document.getElementById("kpi-product").textContent = unitsByProduct[0][0];
document.getElementById("kpi-product-note").textContent = unitsByProduct[0][1] + " units sold";
document.getElementById("period").textContent = months[0] + " to " + months[months.length - 1];

// ============================================================
// STEP 4: DRAW THE CHARTS (Chart.js)
// ============================================================
Chart.defaults.font.family = '"IBM Plex Sans", "Segoe UI", Arial, sans-serif';
Chart.defaults.color = "#667085";

const BLUE = "#1f4e79";
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

// 1. Monthly revenue - line chart
new Chart(document.getElementById("monthlyChart"), {
  type: "line",
  data: {
    labels: months.map(function (m) { return monthNames[Number(m.slice(5)) - 1]; }),
    datasets: [{
      label: "Revenue (\u20B9)",
      data: months.map(function (m) { return monthlyTotals[m]; }),
      borderColor: BLUE,
      backgroundColor: "rgba(31, 78, 121, 0.08)",
      fill: true,
      tension: 0.25,
      pointRadius: 3
    }]
  },
  options: {
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true, ticks: { callback: function (v) { return money(v); } } }
    }
  }
});

// 2. Top 5 products - horizontal bar chart (units sold)
const top5 = unitsByProduct.slice(0, 5);
new Chart(document.getElementById("productChart"), {
  type: "bar",
  data: {
    labels: top5.map(function (p) { return p[0]; }),
    datasets: [{ label: "Units sold", data: top5.map(function (p) { return p[1]; }), backgroundColor: BLUE }]
  },
  options: {
    indexAxis: "y",
    maintainAspectRatio: false,
    plugins: { legend: { display: false } }
  }
});

// 3. Revenue by category - doughnut chart
new Chart(document.getElementById("categoryChart"), {
  type: "doughnut",
  data: {
    labels: revenueByCategory.map(function (c) { return c[0]; }),
    datasets: [{
      data: revenueByCategory.map(function (c) { return c[1]; }),
      backgroundColor: ["#1f4e79", "#3f7cac", "#8fb8d8", "#c9a227", "#9aa5b1"]
    }]
  },
  options: {
    maintainAspectRatio: false,
    plugins: {
      legend: { position: "right" },
      tooltip: { callbacks: { label: function (ctx) { return " " + ctx.label + ": " + money(ctx.parsed); } } }
    }
  }
});

// ============================================================
// STEP 5: FILL THE LOW STOCK TABLE
// ============================================================
const tableBody = document.getElementById("low-stock-body");
lowStock.forEach(function (item) {
  const name = item[0];
  const info = item[1];
  const critical = info.stock < 10;
  const row = document.createElement("tr");
  row.innerHTML =
    "<td>" + name + "</td>" +
    "<td>" + info.category + "</td>" +
    '<td class="num">' + info.stock + "</td>" +
    '<td><span class="badge ' + (critical ? "critical" : "low") + '">' +
    (critical ? "Restock now" : "Running low") + "</span></td>";
  tableBody.appendChild(row);
});
