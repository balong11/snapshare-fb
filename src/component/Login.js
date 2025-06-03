import React from "react";
import { X } from "lucide-react"; // sử dụng icon X hiện đại

export default function Login() {
  return (
    <div
      className="bg-gray-100 min-h-screen flex items-center justify-center"
      style={{ fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif' }}
    >
      <div className="flex flex-col md:flex-row w-full w-[90%] bg-white rounded-lg shadow-md p-4">
        {/* Left Side */}
        <div className="w-full md:w-1/2 mb-4 md:mb-0 md:pr-4 border border-red-500">
          <h1 className="text-4xl text-blue-600 font-bold mb-1">facebook</h1>
          <h2 className="text-2xl font-semibold mb-1">Đăng nhập gần đây</h2>
          <p className="text-gray-600 text-sm mb-3">Nhấp vào ảnh của bạn hoặc thêm tài khoản.</p>

          {/* Recent Login Box */}
          <div className="flex space-x-3">
            <div className="flex flex-col items-center border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/150x150.png?text=User"
                  alt="avatar"
                  className="h-36 w-36 object-cover"
                />
                <button className="absolute top-1 right-1 bg-white rounded-full p-1 shadow">
                  <X className="w-4 h-4 text-gray-600" />
                </button>
              </div>
              <div className="py-2 w-full text-center bg-white text-sm">Long</div>
            </div>

            {/* Add Account */}
            <div
              className="flex flex-col items-center justify-center border border-gray-300 rounded-lg w-36 h-44 shadow-sm cursor-pointer hover:bg-gray-100"
            >
              <div
                className="bg-gray-200 text-gray-600 rounded-full w-10 h-10 flex items-center justify-center text-2xl mb-2"
              >
                +
              </div>
              <span className="text-blue-600 text-sm">Thêm tài khoản</span>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2">
          <div className="bg-white border border-gray-300 rounded-lg shadow p-5">
            <input
              type="text"
              placeholder="Email hoặc số điện thoại"
              className="w-full mb-3 p-3 border rounded text-sm focus:outline-none"
            />
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full mb-3 p-3 border rounded text-sm focus:outline-none"
            />
            <button
              className="w-full bg-blue-600 text-white py-2 rounded font-semibold text-base hover:bg-blue-700"
            >
              Đăng nhập
            </button>
            <div className="text-center mt-2">
              <a href="#" className="underline text-blue-600 text-sm hover:underline">
                Quên mật khẩu?
              </a>
            </div>
            <hr className="my-2" />
            <div className="text-center">
              <button
                className="bg-green-600 text-white px-4 py-2 rounded font-semibold text-sm hover:bg-green-700"
              >
                Tạo tài khoản mới
              </button>
            </div>
          </div>
          <p className="text-center text-xs text-gray-500 mt-3">
            <strong>Tạo Trang</strong> dành cho người nổi tiếng, thương hiệu hoặc doanh nghiệp.
          </p>
        </div>
      </div>
    </div>
  );
}
