# **Hướng dẫn cài đặt dự án**

## **1.1 Giới thiệu**
- Dự án Digital Marketing CSDLNC là một mô hình back-end server được phát triển bằng ngôn ngữ JavaScript.
  Mô hình này dùng để kết nối tới cơ sở dữ liệu, quản lý và theo dõi dữ liệu của một ứng dụng Thương mại điện tử.
## **1.2 Tính năng chính**
- Quản lý lưu trữ dữ liệu của ứng dụng Thương mại điện tử.

## **1.3 Công nghệ sử dụng**
- Ngôn ngữ lập trình: JavaScript
- Framework: Node.js, Express.js
- Cơ sở dữ liệu: SQL server

## **2. Yêu cầu hệ thống**
- **Phần cứng:**
  - CPU: Bộ xử lý đa nhân, tốc độ tối thiểu 2.0 GHz
  - RAM: Tối thiểu 4 GB
  - Ổ đĩa trống: Tối thiểu 5 GB
- **Phần mềm:**
  - **Hệ điều hành:**
    - Windows 10 hoặc mới hơn
    - macOS 10.15 Catalina hoặc mới hơn
    - Các bản phân phối Linux phổ biến (Ubuntu 20.04+, CentOS 8+, v.v.)
  - Các phần mềm hoặc thư viện cần thiết:
    - NVM (để quản lý các phiên bản của Node.js)
    - Node.js
    - npm (đi kèm với Node.js)

## **3. Cài đặt các công cụ và thư viện cần thiết**

- **Công cụ:**
  - **Cách cài đặt NVM (phiên bản 1.1.12)**:
    - Xóa toàn bộ phiên bản NodeJs đã cài trên máy.
    - Lưu ý: cần note lại tên phiên bản đã cài trước đó để cài đặt lại nếu cần thiết để chạy các dự án khác.
    - Kiểm tra máy tính đã cài đặt NVM chưa bằng cách:
      - mở cmd trên máy tính và chạy với quyền quản trị viên
      - chạy lệnh
         ```bash
        nvm
      - Nếu chưa cài, tiến hành cài đặt trên trang chủ của github:
         ```bash
        https://github.com/coreybutler/nvm-windows/releases/tag/1.1.12
      - Nếu đã cài thì sẽ thấy phiên bản của NVM hiện trên màn hình,
        ví dụ:
        ```env
        Running version 1.1.12.
    - Kiểm tra phiên bản NVM, nếu không phải 1.1.12, tiến hành gỡ bằng lệnh với cmd:
         ```bash
        nvm uninstall
    - Sau đó cài đặt lại NVM version 1.1.12 như ở trên.
  - Sau khi cài đặt xong, kiểm tra lại bằng các nhập:
    ```bash
    nvm
  Trên màn hình hiện đúng phiên bản NVM 1.1.12 là đã cài thành công.

  
 - **Cách cài đặt NodeJs (phiên bản 20.9.0)**:
    - Sau khi đã cài NVM, tiến hành cài NodeJs version 20.9.0 bằng cách:
      ```bash
      nvm install 20.9.0

    - Chờ cho tới khi thông báo đã cài đặt thành công
  
- **Thư viện:**
  - Nếu sử dụng package manager (npm, pip, Composer), hướng dẫn chạy lệnh:
    ```bash
    npm install
    ```
    hoặc
    ```bash
    composer install
    ```
## **4. Tải xuống mã nguồn**
- Đường dẫn tới mã nguồn (GitHub, GitLab, link tải về).
- Hướng dẫn clone repository nếu dùng Git:
  ```bash
  git clone <link repository>



## **5. Cấu hình dự án**

- Cách thiết lập tệp cấu hình (ví dụ: `.env`, `config.json`):
  - Liệt kê các thông số cần chỉnh sửa: database, API key, cổng server, v.v.
  - Ví dụ:
    ```env
    DB_HOST=localhost
    DB_PORT=3306
    DB_USER=root
    DB_PASSWORD=password
    ```

## **6. Chạy dự án**

- Hướng dẫn khởi động dự án:
  - Nếu dùng script:
    ```bash
    npm start
    ```
  - Nếu dùng Docker:
    ```bash
    docker-compose up
    ```

## **7. Kiểm tra và xác minh**

- Cách kiểm tra xem dự án đã chạy thành công chưa:
  - Truy cập URL (ví dụ: `http://localhost:3000`).
  - Hướng dẫn chạy test (nếu có):
    ```bash
    npm test
    ```

## **8. Các vấn đề thường gặp**

- Danh sách các lỗi phổ biến và cách khắc phục:
  - **Lỗi:** Không thể kết nối tới database.
    - **Cách xử lý:** Kiểm tra thông tin cấu hình trong tệp `.env`.
  - **Lỗi:** Thư viện không tải được.
    - **Cách xử lý:** Chạy lại lệnh cài đặt:
      ```bash
      npm install
      ```

## **9. Tài liệu tham khảo**

- Link tới tài liệu chi tiết hơn (nếu có).
- Đường dẫn tới kênh hỗ trợ (email, forum, GitHub Issues).

## **10. Liên hệ hỗ trợ**

- Email hoặc số liên lạc của đội hỗ trợ.
- Các kênh hỗ trợ khác như Slack, Discord, hoặc nhóm Facebook.
