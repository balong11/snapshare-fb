import React from "react";
import { FaHome, FaUserFriends, FaVideo, FaStore, FaBell, FaUserCircle, FaSearch, FaBookmark, FaUsers, FaClock, FaFilm, FaThList, FaChevronRight, FaEllipsisH, FaRegSmile, FaPaperPlane, FaRegImage, FaPhone } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-[#f0f2f5] min-h-screen font-sans">
      {/* Top Navbar */}
      <div className="flex items-center justify-between bg-white px-6 py-2 shadow-md sticky top-0 z-20 rounded-b-lg">
        <div className="flex items-center space-x-3">
          <h1 className="text-3xl text-blue-600 font-bold tracking-tight">facebook</h1>
          <div className="relative ml-2">
            <input
              type="text"
              placeholder="Tìm kiếm trên Facebook"
              className="bg-[#f0f2f5] rounded-full pl-10 pr-4 py-2 text-sm focus:outline-none border border-gray-200 w-64 shadow-inner"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-500 text-lg" />
          </div>
        </div>
        <div className="flex space-x-12 text-gray-600 text-2xl">
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-600 border-b-4 border-blue-600"><FaHome /></div>
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-600"><FaUserFriends /></div>
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-600"><FaVideo /></div>
          <div className="flex flex-col items-center cursor-pointer hover:text-blue-600"><FaStore /></div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="bg-gray-200 p-2 rounded-full cursor-pointer hover:bg-gray-300"><FaBell className="text-xl" /></div>
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-9 h-9 rounded-full border-2 border-blue-500 shadow cursor-pointer" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex mt-6 px-6 max-w-[1400px] mx-auto">
        {/* Sidebar trái */}
        <div className="w-1/4 hidden xl:block pr-4">
          <div className="bg-white rounded-2xl shadow-md p-4 mb-4">
            <div className="flex items-center space-x-3 mb-4">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-10 h-10 rounded-full border-2 border-blue-500" />
              <span className="font-semibold text-base">Long Bá</span>
            </div>
            <div className="space-y-1 text-gray-700 text-base">
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-[#e4e6eb] p-2 rounded-xl transition"><FaUserCircle className="text-xl" /> <span>Meta AI</span></div>
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-[#e4e6eb] p-2 rounded-xl transition"><FaUserFriends className="text-xl" /> <span>Bạn bè</span></div>
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-[#e4e6eb] p-2 rounded-xl transition"><FaClock className="text-xl" /> <span>Kỷ niệm</span></div>
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-[#e4e6eb] p-2 rounded-xl transition"><FaBookmark className="text-xl" /> <span>Đã lưu</span></div>
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-[#e4e6eb] p-2 rounded-xl transition"><FaUsers className="text-xl" /> <span>Nhóm</span></div>
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-[#e4e6eb] p-2 rounded-xl transition"><FaFilm className="text-xl" /> <span>Thước phim</span></div>
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-[#e4e6eb] p-2 rounded-xl transition"><FaStore className="text-xl" /> <span>Marketplace</span></div>
              <div className="flex items-center space-x-3 cursor-pointer hover:bg-[#e4e6eb] p-2 rounded-xl transition"><FaThList className="text-xl" /> <span>Xem thêm</span></div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="font-semibold mb-2 text-base">Lối tắt của bạn</div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-[#e4e6eb] p-2 rounded-xl"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/8lH2HDp2qQk.png" alt="shortcut" className="w-7 h-7 rounded" /> <span>Tuyển dụng Front-end ReactJS, VueJS, Angular</span></div>
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-[#e4e6eb] p-2 rounded-xl"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/8lH2HDp2qQk.png" alt="shortcut" className="w-7 h-7 rounded" /> <span>Dragon Castle</span></div>
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-[#e4e6eb] p-2 rounded-xl"><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/8lH2HDp2qQk.png" alt="shortcut" className="w-7 h-7 rounded" /> <span>Monster Legends</span></div>
              <div className="flex items-center space-x-2 cursor-pointer hover:bg-[#e4e6eb] p-2 rounded-xl"><FaChevronRight /> <span>Xem thêm</span></div>
            </div>
          </div>
        </div>

        {/* Feed + Story */}
        <div className="w-full xl:w-2/4 mx-4">
          {/* Story */}
          <div className="flex space-x-3 mb-4 overflow-x-auto pb-2">
            <div className="w-28 h-48 bg-white rounded-2xl shadow flex flex-col items-center justify-center cursor-pointer border-2 border-blue-500 relative group hover:scale-105 transition">
              <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="story" className="w-16 h-16 rounded-full border-4 border-blue-500 mt-4" />
              <span className="text-xs mt-2 font-semibold">Tạo tin</span>
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl border-4 border-white group-hover:bg-blue-700 transition">+</div>
            </div>
            <div className="w-28 h-48 bg-white rounded-2xl shadow flex flex-col items-center justify-center cursor-pointer relative group hover:scale-105 transition">
              <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="story" className="w-16 h-16 rounded-full border-4 border-blue-500 mt-4" />
              <span className="text-xs mt-2 font-semibold">Nguyễn V. Lâm</span>
            </div>
            <div className="w-28 h-48 bg-white rounded-2xl shadow flex flex-col items-center justify-center cursor-pointer relative group hover:scale-105 transition">
              <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="story" className="w-16 h-16 rounded-full border-4 border-blue-500 mt-4" />
              <span className="text-xs mt-2 font-semibold">Đàm Trần Sinh</span>
            </div>
            <div className="w-28 h-48 bg-white rounded-2xl shadow flex flex-col items-center justify-center cursor-pointer relative group hover:scale-105 transition">
              <img src="https://randomuser.me/api/portraits/women/46.jpg" alt="story" className="w-16 h-16 rounded-full border-4 border-blue-500 mt-4" />
              <span className="text-xs mt-2 font-semibold">Thúy Hiền</span>
            </div>
            <div className="w-28 h-48 bg-white rounded-2xl shadow flex flex-col items-center justify-center cursor-pointer relative group hover:scale-105 transition">
              <img src="https://randomuser.me/api/portraits/men/47.jpg" alt="story" className="w-16 h-16 rounded-full border-4 border-blue-500 mt-4" />
              <span className="text-xs mt-2 font-semibold">Phạm Nghĩa</span>
            </div>
          </div>
          {/* Khung đăng bài */}
          <div className="bg-white rounded-2xl shadow p-4 mb-4 flex items-center space-x-3">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="avatar" className="w-10 h-10 rounded-full border-2 border-blue-500" />
            <input
              type="text"
              placeholder="Long ơi, bạn đang nghĩ gì thế?"
              className="flex-1 border border-gray-200 p-3 rounded-full bg-[#f0f2f5] focus:outline-none text-base shadow-inner"
            />
          </div>
          {/* Một post mẫu */}
          <div className="bg-white rounded-2xl shadow p-4 mb-4">
            <div className="flex items-center space-x-3 mb-2">
              <img src="https://randomuser.me/api/portraits/men/48.jpg" alt="avatar" className="w-10 h-10 rounded-full border-2 border-blue-500" />
              <div>
                <p className="text-base font-semibold">Glucozo gì cơ?</p>
                <p className="text-xs text-gray-500">Lan Mỡ · 43 phút · <span>🌐</span></p>
              </div>
            </div>
            <p className="mb-2 text-base">Đẹp đôi thật</p>
            <img src="https://i.imgur.com/6Xb6kzA.jpg" alt="post" className="w-full rounded-xl mb-2 border border-gray-200" />
            <div className="flex space-x-6 text-gray-500 text-sm mt-2 font-medium">
              <span>👍 100</span>
              <span>💬 20 bình luận</span>
              <span>↪️ 5 chia sẻ</span>
            </div>
          </div>
        </div>

        {/* Sidebar phải */}
        <div className="w-1/4 hidden xl:block space-y-4 pl-4">
          {/* Quảng cáo */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="font-semibold mb-2 text-base">Được tài trợ</div>
            <div className="mb-2">
              <img src="https://i.imgur.com/8Km9tLL.jpg" alt="ads" className="w-full rounded-xl" />
              <p className="text-xs mt-1">Mở khóa giao dịch miễn phí</p>
            </div>
            <div>
              <img src="https://i.imgur.com/8Km9tLL.jpg" alt="ads" className="w-full rounded-xl" />
              <p className="text-xs mt-1">Tải ngay và nhận 150 USDT</p>
            </div>
          </div>
          {/* Người liên hệ */}
          <div className="bg-white rounded-2xl shadow-md p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="font-semibold text-base">Người liên hệ</span>
              <FaEllipsisH className="cursor-pointer" />
            </div>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <img src="https://randomuser.me/api/portraits/women/49.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-blue-500" />
                <span>An An</span>
                <span className="w-2 h-2 bg-green-500 rounded-full ml-1 border-2 border-white"></span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="https://randomuser.me/api/portraits/men/50.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-blue-500" />
                <span>Minh Quân</span>
                <span className="w-2 h-2 bg-green-500 rounded-full ml-1 border-2 border-white"></span>
              </div>
              <div className="flex items-center space-x-2">
                <img src="https://randomuser.me/api/portraits/women/51.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-blue-500" />
                <span>Lan Mỡ</span>
                <span className="w-2 h-2 bg-green-500 rounded-full ml-1 border-2 border-white"></span>
              </div>
            </div>
          </div>
          {/* Chat tĩnh */}
          <div className="bg-gradient-to-br from-purple-600 to-purple-500 rounded-2xl shadow-lg p-2 text-white fixed bottom-4 right-8 w-96 z-30 border-2 border-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <img src="https://randomuser.me/api/portraits/women/49.jpg" alt="user" className="w-8 h-8 rounded-full border-2 border-white" />
                <span className="font-semibold">An An</span>
                <span className="text-xs bg-green-400 rounded px-2 ml-2">Đang hoạt động</span>
              </div>
              <div className="flex space-x-2">
                <FaPhone className="cursor-pointer" />
                <FaVideo className="cursor-pointer" />
                <FaEllipsisH className="cursor-pointer" />
                <button className="text-xl leading-none">×</button>
              </div>
            </div>
            <div className="bg-white text-black rounded-xl p-2 mt-2 h-44 overflow-y-auto">
              <div className="mb-2 text-right"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-xl">Giữ lại làm j<br/>Phải share thoii</span></div>
              <div className="mb-2 text-left"><span className="bg-gray-100 px-2 py-1 rounded-xl">:))</span></div>
              <div className="mb-2 text-right"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-xl">share bằng nén file hay git nào :))</span></div>
              <div className="mb-2 text-left"><span className="bg-gray-100 px-2 py-1 rounded-xl">Share bằng momo đc k :))</span></div>
            </div>
            <div className="flex items-center mt-2">
              <FaRegSmile className="text-2xl mr-2 cursor-pointer" />
              <input type="text" placeholder="Aa" className="flex-1 rounded-full px-3 py-1 text-black bg-white" />
              <FaRegImage className="text-2xl mx-2 cursor-pointer" />
              <FaPaperPlane className="text-2xl cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
