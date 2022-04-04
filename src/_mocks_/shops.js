import { faker } from '@faker-js/faker';
import { sample } from 'lodash';
// utils

// ----------------------------------------------------------------------

const citis = [
  {
    name: 'Thành phố Hà Nội',
    districts: [
      'Quận Ba Đình',
      'Quận Hoàn Kiếm',
      'Quận Tây Hồ',
      'Quận Long Biên',
      'Quận Cầu Giấy',
      'Quận Đống Đa',
      'Quận Hai Bà Trưng',
      'Quận Hoàng Mai',
      'Quận Thanh Xuân',
      'Huyện Sóc Sơn',
      'Huyện Đông Anh',
      'Huyện Gia Lâm',
      'Quận Nam Từ Liêm',
      'Huyện Thanh Trì',
      'Quận Bắc Từ Liêm',
      'Huyện Mê Linh',
      'Quận Hà Đông',
      'Thị xã Sơn Tây',
      'Huyện Ba Vì',
      'Huyện Phúc Thọ',
      'Huyện Đan Phượng',
      'Huyện Hoài Đức',
      'Huyện Quốc Oai',
      'Huyện Thạch Thất',
      'Huyện Chương Mỹ',
      'Huyện Thanh Oai',
      'Huyện Thường Tín',
      'Huyện Phú Xuyên',
      'Huyện Ứng Hòa',
      'Huyện Mỹ Đức'
    ]
  },
  {
    name: 'Tỉnh Hà Giang',
    districts: [
      'Thành phố Hà Giang',
      'Huyện Đồng Văn',
      'Huyện Mèo Vạc',
      'Huyện Yên Minh',
      'Huyện Quản Bạ',
      'Huyện Vị Xuyên',
      'Huyện Bắc Mê',
      'Huyện Hoàng Su Phì',
      'Huyện Xín Mần',
      'Huyện Bắc Quang',
      'Huyện Quang Bình'
    ]
  },
  {
    name: 'Tỉnh Cao Bằng',
    districts: [
      'Thành phố Cao Bằng',
      'Huyện Bảo Lâm',
      'Huyện Bảo Lạc',
      'Huyện Hà Quảng',
      'Huyện Trùng Khánh',
      'Huyện Hạ Lang',
      'Huyện Quảng Hòa',
      'Huyện Hoà An',
      'Huyện Nguyên Bình',
      'Huyện Thạch An'
    ]
  },
  {
    name: 'Tỉnh Bắc Kạn',
    districts: [
      'Thành Phố Bắc Kạn',
      'Huyện Pác Nặm',
      'Huyện Ba Bể',
      'Huyện Ngân Sơn',
      'Huyện Bạch Thông',
      'Huyện Chợ Đồn',
      'Huyện Chợ Mới',
      'Huyện Na Rì'
    ]
  },
  {
    name: 'Tỉnh Tuyên Quang',
    districts: [
      'Thành phố Tuyên Quang',
      'Huyện Lâm Bình',
      'Huyện Na Hang',
      'Huyện Chiêm Hóa',
      'Huyện Hàm Yên',
      'Huyện Yên Sơn',
      'Huyện Sơn Dương'
    ]
  },
  {
    name: 'Tỉnh Lào Cai',
    districts: [
      'Thành phố Lào Cai',
      'Huyện Bát Xát',
      'Huyện Mường Khương',
      'Huyện Si Ma Cai',
      'Huyện Bắc Hà',
      'Huyện Bảo Thắng',
      'Huyện Bảo Yên',
      'Thị xã Sa Pa',
      'Huyện Văn Bàn'
    ]
  },
  {
    name: 'Tỉnh Điện Biên',
    districts: [
      'Thành phố Điện Biên Phủ',
      'Thị xã Mường Lay',
      'Huyện Mường Nhé',
      'Huyện Mường Chà',
      'Huyện Tủa Chùa',
      'Huyện Tuần Giáo',
      'Huyện Điện Biên',
      'Huyện Điện Biên Đông',
      'Huyện Mường Ảng',
      'Huyện Nậm Pồ'
    ]
  },
  {
    name: 'Tỉnh Lai Châu',
    districts: [
      'Thành phố Lai Châu',
      'Huyện Tam Đường',
      'Huyện Mường Tè',
      'Huyện Sìn Hồ',
      'Huyện Phong Thổ',
      'Huyện Than Uyên',
      'Huyện Tân Uyên',
      'Huyện Nậm Nhùn'
    ]
  },
  {
    name: 'Tỉnh Sơn La',
    districts: [
      'Thành phố Sơn La',
      'Huyện Quỳnh Nhai',
      'Huyện Thuận Châu',
      'Huyện Mường La',
      'Huyện Bắc Yên',
      'Huyện Phù Yên',
      'Huyện Mộc Châu',
      'Huyện Yên Châu',
      'Huyện Mai Sơn',
      'Huyện Sông Mã',
      'Huyện Sốp Cộp',
      'Huyện Vân Hồ'
    ]
  },
  {
    name: 'Tỉnh Yên Bái',
    districts: [
      'Thành phố Yên Bái',
      'Thị xã Nghĩa Lộ',
      'Huyện Lục Yên',
      'Huyện Văn Yên',
      'Huyện Mù Căng Chải',
      'Huyện Trấn Yên',
      'Huyện Trạm Tấu',
      'Huyện Văn Chấn',
      'Huyện Yên Bình'
    ]
  },
  {
    name: 'Tỉnh Hoà Bình',
    districts: [
      'Thành phố Hòa Bình',
      'Huyện Đà Bắc',
      'Huyện Lương Sơn',
      'Huyện Kim Bôi',
      'Huyện Cao Phong',
      'Huyện Tân Lạc',
      'Huyện Mai Châu',
      'Huyện Lạc Sơn',
      'Huyện Yên Thủy',
      'Huyện Lạc Thủy'
    ]
  },
  {
    name: 'Tỉnh Thái Nguyên',
    districts: [
      'Thành phố Thái Nguyên',
      'Thành phố Sông Công',
      'Huyện Định Hóa',
      'Huyện Phú Lương',
      'Huyện Đồng Hỷ',
      'Huyện Võ Nhai',
      'Huyện Đại Từ',
      'Thị xã Phổ Yên',
      'Huyện Phú Bình'
    ]
  },
  {
    name: 'Tỉnh Lạng Sơn',
    districts: [
      'Thành phố Lạng Sơn',
      'Huyện Tràng Định',
      'Huyện Bình Gia',
      'Huyện Văn Lãng',
      'Huyện Cao Lộc',
      'Huyện Văn Quan',
      'Huyện Bắc Sơn',
      'Huyện Hữu Lũng',
      'Huyện Chi Lăng',
      'Huyện Lộc Bình',
      'Huyện Đình Lập'
    ]
  },
  {
    name: 'Tỉnh Quảng Ninh',
    districts: [
      'Thành phố Hạ Long',
      'Thành phố Móng Cái',
      'Thành phố Cẩm Phả',
      'Thành phố Uông Bí',
      'Huyện Bình Liêu',
      'Huyện Tiên Yên',
      'Huyện Đầm Hà',
      'Huyện Hải Hà',
      'Huyện Ba Chẽ',
      'Huyện Vân Đồn',
      'Thị xã Đông Triều',
      'Thị xã Quảng Yên',
      'Huyện Cô Tô'
    ]
  },
  {
    name: 'Tỉnh Bắc Giang',
    districts: [
      'Thành phố Bắc Giang',
      'Huyện Yên Thế',
      'Huyện Tân Yên',
      'Huyện Lạng Giang',
      'Huyện Lục Nam',
      'Huyện Lục Ngạn',
      'Huyện Sơn Động',
      'Huyện Yên Dũng',
      'Huyện Việt Yên',
      'Huyện Hiệp Hòa'
    ]
  },
  {
    name: 'Tỉnh Phú Thọ',
    districts: [
      'Thành phố Việt Trì',
      'Thị xã Phú Thọ',
      'Huyện Đoan Hùng',
      'Huyện Hạ Hoà',
      'Huyện Thanh Ba',
      'Huyện Phù Ninh',
      'Huyện Yên Lập',
      'Huyện Cẩm Khê',
      'Huyện Tam Nông',
      'Huyện Lâm Thao',
      'Huyện Thanh Sơn',
      'Huyện Thanh Thuỷ',
      'Huyện Tân Sơn'
    ]
  },
  {
    name: 'Tỉnh Vĩnh Phúc',
    districts: [
      'Thành phố Vĩnh Yên',
      'Thành phố Phúc Yên',
      'Huyện Lập Thạch',
      'Huyện Tam Dương',
      'Huyện Tam Đảo',
      'Huyện Bình Xuyên',
      'Huyện Yên Lạc',
      'Huyện Vĩnh Tường',
      'Huyện Sông Lô'
    ]
  },
  {
    name: 'Tỉnh Bắc Ninh',
    districts: [
      'Thành phố Bắc Ninh',
      'Huyện Yên Phong',
      'Huyện Quế Võ',
      'Huyện Tiên Du',
      'Thị xã Từ Sơn',
      'Huyện Thuận Thành',
      'Huyện Gia Bình',
      'Huyện Lương Tài'
    ]
  },
  {
    name: 'Tỉnh Hải Dương',
    districts: [
      'Thành phố Hải Dương',
      'Thành phố Chí Linh',
      'Huyện Nam Sách',
      'Thị xã Kinh Môn',
      'Huyện Kim Thành',
      'Huyện Thanh Hà',
      'Huyện Cẩm Giàng',
      'Huyện Bình Giang',
      'Huyện Gia Lộc',
      'Huyện Tứ Kỳ',
      'Huyện Ninh Giang',
      'Huyện Thanh Miện'
    ]
  },
  {
    name: 'Thành phố Hải Phòng',
    districts: [
      'Quận Hồng Bàng',
      'Quận Ngô Quyền',
      'Quận Lê Chân',
      'Quận Hải An',
      'Quận Kiến An',
      'Quận Đồ Sơn',
      'Quận Dương Kinh',
      'Huyện Thuỷ Nguyên',
      'Huyện An Dương',
      'Huyện An Lão',
      'Huyện Kiến Thuỵ',
      'Huyện Tiên Lãng',
      'Huyện Vĩnh Bảo',
      'Huyện Cát Hải',
      'Huyện Bạch Long Vĩ'
    ]
  },
  {
    name: 'Tỉnh Hưng Yên',
    districts: [
      'Thành phố Hưng Yên',
      'Huyện Văn Lâm',
      'Huyện Văn Giang',
      'Huyện Yên Mỹ',
      'Thị xã Mỹ Hào',
      'Huyện Ân Thi',
      'Huyện Khoái Châu',
      'Huyện Kim Động',
      'Huyện Tiên Lữ',
      'Huyện Phù Cừ'
    ]
  },
  {
    name: 'Tỉnh Thái Bình',
    districts: [
      'Thành phố Thái Bình',
      'Huyện Quỳnh Phụ',
      'Huyện Hưng Hà',
      'Huyện Đông Hưng',
      'Huyện Thái Thụy',
      'Huyện Tiền Hải',
      'Huyện Kiến Xương',
      'Huyện Vũ Thư'
    ]
  },
  {
    name: 'Tỉnh Hà Nam',
    districts: [
      'Thành phố Phủ Lý',
      'Thị xã Duy Tiên',
      'Huyện Kim Bảng',
      'Huyện Thanh Liêm',
      'Huyện Bình Lục',
      'Huyện Lý Nhân'
    ]
  },
  {
    name: 'Tỉnh Nam Định',
    districts: [
      'Thành phố Nam Định',
      'Huyện Mỹ Lộc',
      'Huyện Vụ Bản',
      'Huyện Ý Yên',
      'Huyện Nghĩa Hưng',
      'Huyện Nam Trực',
      'Huyện Trực Ninh',
      'Huyện Xuân Trường',
      'Huyện Giao Thủy',
      'Huyện Hải Hậu'
    ]
  },
  {
    name: 'Tỉnh Ninh Bình',
    districts: [
      'Thành phố Ninh Bình',
      'Thành phố Tam Điệp',
      'Huyện Nho Quan',
      'Huyện Gia Viễn',
      'Huyện Hoa Lư',
      'Huyện Yên Khánh',
      'Huyện Kim Sơn',
      'Huyện Yên Mô'
    ]
  },
  {
    name: 'Tỉnh Thanh Hóa',
    districts: [
      'Thành phố Thanh Hóa',
      'Thị xã Bỉm Sơn',
      'Thành phố Sầm Sơn',
      'Huyện Mường Lát',
      'Huyện Quan Hóa',
      'Huyện Bá Thước',
      'Huyện Quan Sơn',
      'Huyện Lang Chánh',
      'Huyện Ngọc Lặc',
      'Huyện Cẩm Thủy',
      'Huyện Thạch Thành',
      'Huyện Hà Trung',
      'Huyện Vĩnh Lộc',
      'Huyện Yên Định',
      'Huyện Thọ Xuân',
      'Huyện Thường Xuân',
      'Huyện Triệu Sơn',
      'Huyện Thiệu Hóa',
      'Huyện Hoằng Hóa',
      'Huyện Hậu Lộc',
      'Huyện Nga Sơn',
      'Huyện Như Xuân',
      'Huyện Như Thanh',
      'Huyện Nông Cống',
      'Huyện Đông Sơn',
      'Huyện Quảng Xương',
      'Thị xã Nghi Sơn'
    ]
  },
  {
    name: 'Tỉnh Nghệ An',
    districts: [
      'Thành phố Vinh',
      'Thị xã Cửa Lò',
      'Thị xã Thái Hoà',
      'Huyện Quế Phong',
      'Huyện Quỳ Châu',
      'Huyện Kỳ Sơn',
      'Huyện Tương Dương',
      'Huyện Nghĩa Đàn',
      'Huyện Quỳ Hợp',
      'Huyện Quỳnh Lưu',
      'Huyện Con Cuông',
      'Huyện Tân Kỳ',
      'Huyện Anh Sơn',
      'Huyện Diễn Châu',
      'Huyện Yên Thành',
      'Huyện Đô Lương',
      'Huyện Thanh Chương',
      'Huyện Nghi Lộc',
      'Huyện Nam Đàn',
      'Huyện Hưng Nguyên',
      'Thị xã Hoàng Mai'
    ]
  },
  {
    name: 'Tỉnh Hà Tĩnh',
    districts: [
      'Thành phố Hà Tĩnh',
      'Thị xã Hồng Lĩnh',
      'Huyện Hương Sơn',
      'Huyện Đức Thọ',
      'Huyện Vũ Quang',
      'Huyện Nghi Xuân',
      'Huyện Can Lộc',
      'Huyện Hương Khê',
      'Huyện Thạch Hà',
      'Huyện Cẩm Xuyên',
      'Huyện Kỳ Anh',
      'Huyện Lộc Hà',
      'Thị xã Kỳ Anh'
    ]
  },
  {
    name: 'Tỉnh Quảng Bình',
    districts: [
      'Thành Phố Đồng Hới',
      'Huyện Minh Hóa',
      'Huyện Tuyên Hóa',
      'Huyện Quảng Trạch',
      'Huyện Bố Trạch',
      'Huyện Quảng Ninh',
      'Huyện Lệ Thủy',
      'Thị xã Ba Đồn'
    ]
  },
  {
    name: 'Tỉnh Quảng Trị',
    districts: [
      'Thành phố Đông Hà',
      'Thị xã Quảng Trị',
      'Huyện Vĩnh Linh',
      'Huyện Hướng Hóa',
      'Huyện Gio Linh',
      'Huyện Đa Krông',
      'Huyện Cam Lộ',
      'Huyện Triệu Phong',
      'Huyện Hải Lăng',
      'Huyện Cồn Cỏ'
    ]
  },
  {
    name: 'Tỉnh Thừa Thiên Huế',
    districts: [
      'Thành phố Huế',
      'Huyện Phong Điền',
      'Huyện Quảng Điền',
      'Huyện Phú Vang',
      'Thị xã Hương Thủy',
      'Thị xã Hương Trà',
      'Huyện A Lưới',
      'Huyện Phú Lộc',
      'Huyện Nam Đông'
    ]
  },
  {
    name: 'Thành phố Đà Nẵng',
    districts: [
      'Quận Liên Chiểu',
      'Quận Thanh Khê',
      'Quận Hải Châu',
      'Quận Sơn Trà',
      'Quận Ngũ Hành Sơn',
      'Quận Cẩm Lệ',
      'Huyện Hòa Vang',
      'Huyện Hoàng Sa'
    ]
  },
  {
    name: 'Tỉnh Quảng Nam',
    districts: [
      'Thành phố Tam Kỳ',
      'Thành phố Hội An',
      'Huyện Tây Giang',
      'Huyện Đông Giang',
      'Huyện Đại Lộc',
      'Thị xã Điện Bàn',
      'Huyện Duy Xuyên',
      'Huyện Quế Sơn',
      'Huyện Nam Giang',
      'Huyện Phước Sơn',
      'Huyện Hiệp Đức',
      'Huyện Thăng Bình',
      'Huyện Tiên Phước',
      'Huyện Bắc Trà My',
      'Huyện Nam Trà My',
      'Huyện Núi Thành',
      'Huyện Phú Ninh',
      'Huyện Nông Sơn'
    ]
  },
  {
    name: 'Tỉnh Quảng Ngãi',
    districts: [
      'Thành phố Quảng Ngãi',
      'Huyện Bình Sơn',
      'Huyện Trà Bồng',
      'Huyện Sơn Tịnh',
      'Huyện Tư Nghĩa',
      'Huyện Sơn Hà',
      'Huyện Sơn Tây',
      'Huyện Minh Long',
      'Huyện Nghĩa Hành',
      'Huyện Mộ Đức',
      'Thị xã Đức Phổ',
      'Huyện Ba Tơ',
      'Huyện Lý Sơn'
    ]
  },
  {
    name: 'Tỉnh Bình Định',
    districts: [
      'Thành phố Quy Nhơn',
      'Huyện An Lão',
      'Thị xã Hoài Nhơn',
      'Huyện Hoài Ân',
      'Huyện Phù Mỹ',
      'Huyện Vĩnh Thạnh',
      'Huyện Tây Sơn',
      'Huyện Phù Cát',
      'Thị xã An Nhơn',
      'Huyện Tuy Phước',
      'Huyện Vân Canh'
    ]
  },
  {
    name: 'Tỉnh Phú Yên',
    districts: [
      'Thành phố Tuy Hoà',
      'Thị xã Sông Cầu',
      'Huyện Đồng Xuân',
      'Huyện Tuy An',
      'Huyện Sơn Hòa',
      'Huyện Sông Hinh',
      'Huyện Tây Hoà',
      'Huyện Phú Hoà',
      'Thị xã Đông Hòa'
    ]
  },
  {
    name: 'Tỉnh Khánh Hòa',
    districts: [
      'Thành phố Nha Trang',
      'Thành phố Cam Ranh',
      'Huyện Cam Lâm',
      'Huyện Vạn Ninh',
      'Thị xã Ninh Hòa',
      'Huyện Khánh Vĩnh',
      'Huyện Diên Khánh',
      'Huyện Khánh Sơn',
      'Huyện Trường Sa'
    ]
  },
  {
    name: 'Tỉnh Ninh Thuận',
    districts: [
      'Thành phố Phan Rang-Tháp Chàm',
      'Huyện Bác Ái',
      'Huyện Ninh Sơn',
      'Huyện Ninh Hải',
      'Huyện Ninh Phước',
      'Huyện Thuận Bắc',
      'Huyện Thuận Nam'
    ]
  },
  {
    name: 'Tỉnh Bình Thuận',
    districts: [
      'Thành phố Phan Thiết',
      'Thị xã La Gi',
      'Huyện Tuy Phong',
      'Huyện Bắc Bình',
      'Huyện Hàm Thuận Bắc',
      'Huyện Hàm Thuận Nam',
      'Huyện Tánh Linh',
      'Huyện Đức Linh',
      'Huyện Hàm Tân',
      'Huyện Phú Quí'
    ]
  },
  {
    name: 'Tỉnh Kon Tum',
    districts: [
      'Thành phố Kon Tum',
      'Huyện Đắk Glei',
      'Huyện Ngọc Hồi',
      'Huyện Đắk Tô',
      'Huyện Kon Plông',
      'Huyện Kon Rẫy',
      'Huyện Đắk Hà',
      'Huyện Sa Thầy',
      'Huyện Tu Mơ Rông',
      "Huyện Ia H' Drai"
    ]
  },
  {
    name: 'Tỉnh Gia Lai',
    districts: [
      'Thành phố Pleiku',
      'Thị xã An Khê',
      'Thị xã Ayun Pa',
      'Huyện KBang',
      'Huyện Đăk Đoa',
      'Huyện Chư Păh',
      'Huyện Ia Grai',
      'Huyện Mang Yang',
      'Huyện Kông Chro',
      'Huyện Đức Cơ',
      'Huyện Chư Prông',
      'Huyện Chư Sê',
      'Huyện Đăk Pơ',
      'Huyện Ia Pa',
      'Huyện Krông Pa',
      'Huyện Phú Thiện',
      'Huyện Chư Pưh'
    ]
  },
  {
    name: 'Tỉnh Đắk Lắk',
    districts: [
      'Thành phố Buôn Ma Thuột',
      'Thị xã Buôn Hồ',
      "Huyện Ea H'leo",
      'Huyện Ea Súp',
      'Huyện Buôn Đôn',
      "Huyện Cư M'gar",
      'Huyện Krông Búk',
      'Huyện Krông Năng',
      'Huyện Ea Kar',
      "Huyện M'Đrắk",
      'Huyện Krông Bông',
      'Huyện Krông Pắc',
      'Huyện Krông A Na',
      'Huyện Lắk',
      'Huyện Cư Kuin'
    ]
  },
  {
    name: 'Tỉnh Đắk Nông',
    districts: [
      'Thành phố Gia Nghĩa',
      'Huyện Đăk Glong',
      'Huyện Cư Jút',
      'Huyện Đắk Mil',
      'Huyện Krông Nô',
      'Huyện Đắk Song',
      "Huyện Đắk R'Lấp",
      'Huyện Tuy Đức'
    ]
  },
  {
    name: 'Tỉnh Lâm Đồng',
    districts: [
      'Thành phố Đà Lạt',
      'Thành phố Bảo Lộc',
      'Huyện Đam Rông',
      'Huyện Lạc Dương',
      'Huyện Lâm Hà',
      'Huyện Đơn Dương',
      'Huyện Đức Trọng',
      'Huyện Di Linh',
      'Huyện Bảo Lâm',
      'Huyện Đạ Huoai',
      'Huyện Đạ Tẻh',
      'Huyện Cát Tiên'
    ]
  },
  {
    name: 'Tỉnh Bình Phước',
    districts: [
      'Thị xã Phước Long',
      'Thành phố Đồng Xoài',
      'Thị xã Bình Long',
      'Huyện Bù Gia Mập',
      'Huyện Lộc Ninh',
      'Huyện Bù Đốp',
      'Huyện Hớn Quản',
      'Huyện Đồng Phú',
      'Huyện Bù Đăng',
      'Huyện Chơn Thành',
      'Huyện Phú Riềng'
    ]
  },
  {
    name: 'Tỉnh Tây Ninh',
    districts: [
      'Thành phố Tây Ninh',
      'Huyện Tân Biên',
      'Huyện Tân Châu',
      'Huyện Dương Minh Châu',
      'Huyện Châu Thành',
      'Thị xã Hòa Thành',
      'Huyện Gò Dầu',
      'Huyện Bến Cầu',
      'Thị xã Trảng Bàng'
    ]
  },
  {
    name: 'Tỉnh Bình Dương',
    districts: [
      'Thành phố Thủ Dầu Một',
      'Huyện Bàu Bàng',
      'Huyện Dầu Tiếng',
      'Thị xã Bến Cát',
      'Huyện Phú Giáo',
      'Thị xã Tân Uyên',
      'Thành phố Dĩ An',
      'Thành phố Thuận An',
      'Huyện Bắc Tân Uyên'
    ]
  },
  {
    name: 'Tỉnh Đồng Nai',
    districts: [
      'Thành phố Biên Hòa',
      'Thành phố Long Khánh',
      'Huyện Tân Phú',
      'Huyện Vĩnh Cửu',
      'Huyện Định Quán',
      'Huyện Trảng Bom',
      'Huyện Thống Nhất',
      'Huyện Cẩm Mỹ',
      'Huyện Long Thành',
      'Huyện Xuân Lộc',
      'Huyện Nhơn Trạch'
    ]
  },
  {
    name: 'Tỉnh Bà Rịa - Vũng Tàu',
    districts: [
      'Thành phố Vũng Tàu',
      'Thành phố Bà Rịa',
      'Huyện Châu Đức',
      'Huyện Xuyên Mộc',
      'Huyện Long Điền',
      'Huyện Đất Đỏ',
      'Thị xã Phú Mỹ',
      'Huyện Côn Đảo'
    ]
  },
  {
    name: 'Thành phố Hồ Chí Minh',
    districts: [
      'Quận 1',
      'Quận 12',
      'Quận Gò Vấp',
      'Quận Bình Thạnh',
      'Quận Tân Bình',
      'Quận Tân Phú',
      'Quận Phú Nhuận',
      'Thành phố Thủ Đức',
      'Quận 3',
      'Quận 10',
      'Quận 11',
      'Quận 4',
      'Quận 5',
      'Quận 6',
      'Quận 8',
      'Quận Bình Tân',
      'Quận 7',
      'Huyện Củ Chi',
      'Huyện Hóc Môn',
      'Huyện Bình Chánh',
      'Huyện Nhà Bè',
      'Huyện Cần Giờ'
    ]
  },
  {
    name: 'Tỉnh Long An',
    districts: [
      'Thành phố Tân An',
      'Thị xã Kiến Tường',
      'Huyện Tân Hưng',
      'Huyện Vĩnh Hưng',
      'Huyện Mộc Hóa',
      'Huyện Tân Thạnh',
      'Huyện Thạnh Hóa',
      'Huyện Đức Huệ',
      'Huyện Đức Hòa',
      'Huyện Bến Lức',
      'Huyện Thủ Thừa',
      'Huyện Tân Trụ',
      'Huyện Cần Đước',
      'Huyện Cần Giuộc',
      'Huyện Châu Thành'
    ]
  },
  {
    name: 'Tỉnh Tiền Giang',
    districts: [
      'Thành phố Mỹ Tho',
      'Thị xã Gò Công',
      'Thị xã Cai Lậy',
      'Huyện Tân Phước',
      'Huyện Cái Bè',
      'Huyện Cai Lậy',
      'Huyện Châu Thành',
      'Huyện Chợ Gạo',
      'Huyện Gò Công Tây',
      'Huyện Gò Công Đông',
      'Huyện Tân Phú Đông'
    ]
  },
  {
    name: 'Tỉnh Bến Tre',
    districts: [
      'Thành phố Bến Tre',
      'Huyện Châu Thành',
      'Huyện Chợ Lách',
      'Huyện Mỏ Cày Nam',
      'Huyện Giồng Trôm',
      'Huyện Bình Đại',
      'Huyện Ba Tri',
      'Huyện Thạnh Phú',
      'Huyện Mỏ Cày Bắc'
    ]
  },
  {
    name: 'Tỉnh Trà Vinh',
    districts: [
      'Thành phố Trà Vinh',
      'Huyện Càng Long',
      'Huyện Cầu Kè',
      'Huyện Tiểu Cần',
      'Huyện Châu Thành',
      'Huyện Cầu Ngang',
      'Huyện Trà Cú',
      'Huyện Duyên Hải',
      'Thị xã Duyên Hải'
    ]
  },
  {
    name: 'Tỉnh Vĩnh Long',
    districts: [
      'Thành phố Vĩnh Long',
      'Huyện Long Hồ',
      'Huyện Mang Thít',
      'Huyện Vũng Liêm',
      'Huyện Tam Bình',
      'Thị xã Bình Minh',
      'Huyện Trà Ôn',
      'Huyện Bình Tân'
    ]
  },
  {
    name: 'Tỉnh Đồng Tháp',
    districts: [
      'Thành phố Cao Lãnh',
      'Thành phố Sa Đéc',
      'Thành phố Hồng Ngự',
      'Huyện Tân Hồng',
      'Huyện Hồng Ngự',
      'Huyện Tam Nông',
      'Huyện Tháp Mười',
      'Huyện Cao Lãnh',
      'Huyện Thanh Bình',
      'Huyện Lấp Vò',
      'Huyện Lai Vung',
      'Huyện Châu Thành'
    ]
  },
  {
    name: 'Tỉnh An Giang',
    districts: [
      'Thành phố Long Xuyên',
      'Thành phố Châu Đốc',
      'Huyện An Phú',
      'Thị xã Tân Châu',
      'Huyện Phú Tân',
      'Huyện Châu Phú',
      'Huyện Tịnh Biên',
      'Huyện Tri Tôn',
      'Huyện Châu Thành',
      'Huyện Chợ Mới',
      'Huyện Thoại Sơn'
    ]
  },
  {
    name: 'Tỉnh Kiên Giang',
    districts: [
      'Thành phố Rạch Giá',
      'Thành phố Hà Tiên',
      'Huyện Kiên Lương',
      'Huyện Hòn Đất',
      'Huyện Tân Hiệp',
      'Huyện Châu Thành',
      'Huyện Giồng Riềng',
      'Huyện Gò Quao',
      'Huyện An Biên',
      'Huyện An Minh',
      'Huyện Vĩnh Thuận',
      'Thành phố Phú Quốc',
      'Huyện Kiên Hải',
      'Huyện U Minh Thượng',
      'Huyện Giang Thành'
    ]
  },
  {
    name: 'Thành phố Cần Thơ',
    districts: [
      'Quận Ninh Kiều',
      'Quận Ô Môn',
      'Quận Bình Thuỷ',
      'Quận Cái Răng',
      'Quận Thốt Nốt',
      'Huyện Vĩnh Thạnh',
      'Huyện Cờ Đỏ',
      'Huyện Phong Điền',
      'Huyện Thới Lai'
    ]
  },
  {
    name: 'Tỉnh Hậu Giang',
    districts: [
      'Thành phố Vị Thanh',
      'Thành phố Ngã Bảy',
      'Huyện Châu Thành A',
      'Huyện Châu Thành',
      'Huyện Phụng Hiệp',
      'Huyện Vị Thuỷ',
      'Huyện Long Mỹ',
      'Thị xã Long Mỹ'
    ]
  },
  {
    name: 'Tỉnh Sóc Trăng',
    districts: [
      'Thành phố Sóc Trăng',
      'Huyện Châu Thành',
      'Huyện Kế Sách',
      'Huyện Mỹ Tú',
      'Huyện Cù Lao Dung',
      'Huyện Long Phú',
      'Huyện Mỹ Xuyên',
      'Thị xã Ngã Năm',
      'Huyện Thạnh Trị',
      'Thị xã Vĩnh Châu',
      'Huyện Trần Đề'
    ]
  },
  {
    name: 'Tỉnh Bạc Liêu',
    districts: [
      'Thành phố Bạc Liêu',
      'Huyện Hồng Dân',
      'Huyện Phước Long',
      'Huyện Vĩnh Lợi',
      'Thị xã Giá Rai',
      'Huyện Đông Hải',
      'Huyện Hoà Bình'
    ]
  },
  {
    name: 'Tỉnh Cà Mau',
    districts: [
      'Thành phố Cà Mau',
      'Huyện U Minh',
      'Huyện Thới Bình',
      'Huyện Trần Văn Thời',
      'Huyện Cái Nước',
      'Huyện Đầm Dơi',
      'Huyện Năm Căn',
      'Huyện Phú Tân',
      'Huyện Ngọc Hiển'
    ]
  }
];

const pickedCity = citis[Math.floor(Math.random() * citis.length)];

const shops = [...Array(23)].map(() => ({
  id: faker.datatype.number(),
  cover: faker.image.abstract(768, 420, true),
  name: faker.commerce.department(),
  description: faker.lorem.lines(2),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumberFormat(),
  street: faker.address.streetAddress(),
  district: pickedCity.districts[Math.floor(Math.random() * pickedCity.districts.length)],
  city: pickedCity.name,
  views: faker.datatype.number(),
  ratings: {
    score: faker.datatype.number({ min: 1, max: 500 }),
    totalRating: faker.datatype.number({ min: 1, max: 100 })
  },
  favorites: faker.datatype.number(),
  owner: {
    name: faker.name.findName(),
    avatarUrl: faker.image.avatar()
  },
  openAt: faker.time.recent('date'),
  closeAt: faker.time.recent('date'),
  createdAt: faker.date.past(),
  status: sample(['openned', 'closed'])
}));

export default shops;
