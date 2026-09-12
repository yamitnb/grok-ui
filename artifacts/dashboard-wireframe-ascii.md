# Wireframe ASCII — Dashboard Tổng quan

```
+--------------------------------------------------------------------------------------------------------------+
|                                                                                                              |
|  +------------------+  Thu Bay, 12 thang 9, 2026                                                             |
|  | [M] Ms Ngan      |  TONG QUAN                                                                             |
|  |     English      |                                                                                        |
|  |  Quan ly lop hoc |  +-----------------------------------------------------------------------------+       |
|  |                  |  | XIN CHAO, LAM PHAM  [v]  [crown Quan tri]                    Thang 9/2026 v |       |
|  |  QUAN LY         |  | Bang dieu khien hoc tap va lich day ca nhan.                                |       |
|  |                  |  |                                                                             |       |
|  |  [##] Tong quan < |  |  ( ) Them hoc sinh     (+) Tao lop hoc     [ ] Diem danh                   |       |
|  |  [Cal] Lich day   |  +-----------------------------------------------------------------------------+       |
|  |  [Chk] Diem danh  |                                                                                        |
|  |  [Cap] Lop hoc    |  +---------------+  +------------------+  +---------------+  +---------------+        |
|  |  [Usr] Hoc sinh   |  | 180           |  | 7.035.000 d      |  | 0 d           |  | 0%            |        |
|  |  [3]   Hoc phi    |  | HS dang hoc   |  | Tong HP phat sinh|  | Tong HP da thu|  | Ty le thu HP  |        |
|  |                  |  |          (O)  |  |             (O)  |  |          (O)  |  |          (O)  |        |
|  |                  |  +---------------+  +------------------+  +---------------+  +---------------+        |
|  |                  |                                                                                        |
|  |                  |  +-------------------------------------+  +------------------------------------+       |
|  |                  |  | Lich day sap toi    [Xem TKB toan]  |  | Doanh thu du kien hom nay          |       |
|  |                  |  |                                     |  | Tinh theo luot HS co mat + HP lop  |       |
|  |                  |  | Lop da diem danh hom nay     [1 lop]|  |                                    |       |
|  |                  |  | Tong hop theo luot buoi diem danh   |  | 595.000 d              [bar mini]  |       |
|  |                  |  |                                     |  | Ngay xem 12/09/2026                |       |
|  |                  |  | Eng 4 NC  07:30                     |  |                                    |       |
|  |                  |  | Co mat 17 | Vang 0 | Co phep 0      |  | Eng 4 NC  07:30                    |       |
|  |                  |  |                                     |  | 17 co mat / 0 vang / 0 phep        |       |
|  |                  |  | HOM NAY - THU 7 - 12/09             |  | 595.000 d                          |       |
|  |                  |  | +------------+ +------------+ +-----------+                                 |       |
|  |                  |  | |09:00-10:30 | |14:00-15:30 | |15:30-17:00|                                 |       |
|  |                  |  | |Eng 3A      | |Eng 3B      | |Eng 4 NC   |                                 |       |
|  |                  |  | |Chua ND     | |Chua ND     | |Anh 4 NC   |                                 |       |
|  |                  |  | |[Diem danh] | |[Diem danh] | |[Diem danh]|                                 |       |
|  |                  |  | +------------+ +------------+ +-----------+                                 |       |
|  |                  |  |                                     |  +------------------------------------+       |
|  |                  |  | NGAY MAI - CHU NHAT - 13/09         |  +------------------------------------+       |
|  |                  |  | +------------+ +------------+ +-----------+  Doanh thu 12 thang             |       |
|  |                  |  | |07:30-09:00 | |09:00-10:30 | |14:00-15:30|  44.730.000 d                    |       |
|  |                  |  | |Eng 2       | |Eng 9B      | |Eng 7A     |                                  |       |
|  |                  |  | |Chua ND     | |Chua ND     | |Chua ND    |  [12 thang v] [Cot v] [2026 v]  |       |
|  |                  |  | |[Diem danh] | |[Diem danh] | |[Diem danh]|                                  |       |
|  |                  |  | +------------+ +------------+ +-----------+  |  |  |  |  |  |##| |#| |  |  |       |
|  |  [Thu gon]        |  +-------------------------------------+      0d 0d 0d 0d 37.7 7.0 0d 0d 0d        |
|  |                  |                                                                                        |
|  |  +--------------+|                                                                                        |
|  |  | (av) Lam Pham||                                                                                        |
|  |  |  crown Quan tri                                                                                        |
|  |  +--------------+|                                                                                        |
|  +------------------+                                                                                        |
+--------------------------------------------------------------------------------------------------------------+
```

## Grid 12 cột (gợi ý implement)

```
Row 0  [ Sidebar 2col ][ Header / Greeting                                         10col ]
Row 1  [ Sidebar      ][ KPI 3col ][ KPI 3col ][ KPI 3col ][ KPI 3col ]
Row 2  [ Sidebar      ][ Lich day sap toi 6col           ][ DT hom nay 6col        ]
Row 3  [ Sidebar      ][ (tiep lich: hom nay + ngay mai) ][ DT 12 thang 6col       ]
Row F  [ User card    ]
```

## Vùng tương tác

```
[Sidebar]
  - item active: Tong quan
  - thu gon sidebar
  - mo profile user

[Header]
  - dropdown Thang 9/2026
  - Them hoc sinh
  - Tao lop hoc
  - Diem danh

[Lich]
  - Xem toan bo thoi khoa bieu
  - nut Diem danh tren moi buoi

[Doanh thu]
  - filter 12 thang / loai bieu do / nam
```

## Tỷ lệ gần đúng

```
Sidebar .............. 18%
Main content ......... 82%
  KPI row ............ 100% main / 4 card deu
  Bottom left ........ 52%
  Bottom right ....... 48%
    DT hom nay ....... ~42% chieu cao khoi phai
    DT 12 thang ...... ~58% chieu cao khoi phai
```
