import React from "react";
import { FaHome, FaUserFriends, FaVideo, FaStore, FaBell, FaUserCircle, FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Top Navbar */}
      <div className="flex items-center justify-between bg-white px-4 py-2 shadow">
        <div className="flex items-center space-x-2">
          <h1 className="text-3xl text-blue-600 font-bold">facebook</h1>
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm Facebook"
              className="bg-gray-100 rounded-full pl-10 pr-4 py-2 text-sm"
            />
            <FaSearch className="absolute left-3 top-2.5 text-gray-500" />
          </div>
        </div>

        <div className="flex space-x-6 text-gray-600 text-xl">
          <FaHome className="cursor-pointer hover:text-blue-500" />
          <FaUserFriends className="cursor-pointer hover:text-blue-500" />
          <FaVideo className="cursor-pointer hover:text-blue-500" />
          <FaStore className="cursor-pointer hover:text-blue-500" />
        </div>

        <div className="flex space-x-4 items-center">
          <FaBell className="text-xl cursor-pointer hover:text-blue-500" />
          <FaUserCircle className="text-2xl cursor-pointer hover:text-blue-500" />
        </div>
      </div>

      {/* Content Section */}
      <div className="flex mt-6 px-6">
        {/* Sidebar */}
        <div className="w-1/4 hidden md:block">
          <div className="bg-white rounded-lg shadow p-4">Sidebar trái (thông tin cá nhân, shortcut...)</div>
        </div>

        {/* Feed */}
        <div className="w-full md:w-2/4 mx-4">
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <input
              type="text"
              placeholder="Bạn đang nghĩ gì?"
              className="w-full border border-gray-300 p-2 rounded"
            />
          </div>
          <div className="bg-white rounded-lg shadow p-4 mb-4">
            <p className="text-sm font-semibold">Người dùng A đã đăng</p>
            <p className="mt-2">Đây là nội dung bài viết giống Facebook Life.</p>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-1/4 hidden md:block">
          <div className="bg-white rounded-lg shadow p-4">Sidebar phải (liên hệ, thông báo...)</div>
        </div>
      </div>
    </div>
  );
}
