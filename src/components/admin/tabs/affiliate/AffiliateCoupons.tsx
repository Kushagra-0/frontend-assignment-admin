import { useState } from "react";
import searchNormal from "../../../../assets/icons/navabar/search-normal.png"
import { ArrowPathIcon, PlusIcon, ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import actions from "../../../../assets/icons/afflilateCommission/actions.png"
import { affiliateCouponsSpecialCoupons } from "../../../../constants/AffiliateCouponsSpecialCoupons";

const AffiliateCoupons = () => {
  const [defaultProductCommission, setDefaultProductCommission] = useState(true);
  const [defaultDoctorCommission, setDefaultDoctorCommission] = useState(true);

  return (
    <div className="min-h-screen pb-12">
      <div className="mb-6 flex items-end justify-end">
        <button className="bg-[#3A643B] text-white px-6 py-2 rounded-lg font-medium">
          Add Special Coupon
        </button>
      </div>

      {/* Default Product Commission Card */}
      <div className="mb-6">
        <div className='flex flex-row justify-between mb-4'>
          <h3 className="font-medium text-gray-900 text-xl">Default Coupons</h3>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={defaultProductCommission}
              onChange={(e) => setDefaultProductCommission(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white rounded-full border border-gray-300 
       peer-checked:bg-white peer-checked:border-gray-300 
       relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
       after:bg-gray-400 after:border after:border-gray-300 after:rounded-full 
       after:h-5 after:w-5 after:transition-all 
       peer-checked:after:translate-x-full peer-checked:after:bg-[#3A643B] peer-checked:after:border-gray-300">
            </div>
          </label>
        </div>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="grid grid-cols-3 gap-6">
            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">
                Doctor Name
              </label>
              <select
                className="w-full px-4 py-3 border border-[#E6E6F2] rounded-xl text-base text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3A643B]/50 appearance-none"
              >
                <option>Applies to all the products</option>
              </select>
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">
                Usage Limit
              </label>
              <select
                className="w-full px-4 py-3 border border-[#E6E6F2] rounded-xl text-base text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3A643B]/50 appearance-none"
              >
                <option>Please select a Percentage</option>
              </select>
            </div>

            <div>
              <label className="block text-base font-semibold text-gray-900 mb-2">
                Percentage %  
              </label>
              <select
                className="w-full px-4 py-3 border border-[#E6E6F2] rounded-xl text-base text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#3A643B]/50 appearance-none"
              >
                <option>Please select a Percentage</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="bg-[#3A643B] text-white px-6 py-2 rounded-lg font-medium">
              Update
            </button>
          </div>
        </div>
      </div>

      {/* Default Doctor Commission Card */}
      <div className="">
        <div className='flex justify-between mb-4'>
          <h3 className="text-lg font-medium text-gray-900">Default Cart Discount</h3>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={defaultDoctorCommission}
              onChange={(e) => setDefaultDoctorCommission(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-white rounded-full border border-gray-300 
       peer-checked:bg-white peer-checked:border-gray-300 
       relative after:content-[''] after:absolute after:top-[2px] after:left-[2px] 
       after:bg-gray-400 after:border after:border-gray-300 after:rounded-full 
       after:h-5 after:w-5 after:transition-all 
       peer-checked:after:translate-x-full peer-checked:after:bg-[#3A643B] peer-checked:after:border-gray-300">
            </div>
          </label>
        </div>
        <div className="p-6 bg-white rounded-2xl shadow mb-6">
          <div className="flex items-center justify-between mb-4">
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Product Name</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-500">
                <option>Applies to all the Doctors.</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Doctor Name</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-500">
                <option>Please select a Percentage</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Usage Limit</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-500">
                <option>Applies to all the Doctors.</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Discount</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-500">
                <option>Please select a Percentage</option>
              </select>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="bg-[#3A643B] text-white px-6 py-2 rounded-lg font-medium">
              Update
            </button>
          </div>
        </div>
      </div>

      {/* Special Commission Table */}
      <div className="bg-white rounded-2xl shadow">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-6 items-cente">
              <h3 className="text-lg font-medium text-gray-900">Special Coupons</h3>
              <div className="flex items-center bg-[#F5F5F6] rounded-xl px-3 py-2">
                <img src={searchNormal} alt="Search Icon" className="w-4 h-4 mr-2" />
                <input
                  type="text"
                  placeholder="Search here"
                  className="flex-1 bg-transparent outline-none text-sm poppins-medium placeholder-[#28643B4D] text-[#28643B4D] focus:text-[#333548BF]"
                />
              </div>
              <div className="bg-[#F5F5F6] h-8.5 w-8.5 flex items-center justify-center rounded-lg">
                <PlusIcon className="size-5 text-[#3A643B]" />
              </div>
              <div className="bg-[#F5F5F6] h-8.5 w-8.5 flex items-center justify-center rounded-lg">
                <ArrowPathIcon className="size-4 text-[#3A643B]" />
              </div>
            </div>
            <div className="bg-[#F5F5F6] h-8.5 w-8.5 flex items-center justify-center rounded-lg">
              <ArrowDownTrayIcon className="size-5 text-[#3A643B]" />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-gray-200 items-center justify-center">
                  <th className="text-left py-3 px-4 font-semibold">Doctor Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Product Name</th>
                  <th className="text-left py-3 px-4 font-semibold">Usage Limit</th>
                  <th className="text-left py-3 px-4 font-semibold">Percentage</th>
                  <th className="text-left py-3 px-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody>
                {affiliateCouponsSpecialCoupons.map((coupon) => (
                  <tr key={coupon.id} className="border-b border-gray-300">
                    <td className="py-4 px-4">
                      <div className="flex items-center rounded-full">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <img src={coupon.icon} className="rounded-full" />
                        </div>
                        <span className="text-sm text-gray-900">{coupon.doctorName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">{coupon.productName}</td>
                    <td className="px-4 text-sm text-gray-900">{coupon.usageLimit}</td>
                    <td className="pl-10 py-4 px-4 text-sm text-gray-900 items-center">{coupon.percentage}</td>
                    <td className="pl-8 py-4 px-4">
                      <button className="p-1 text-gray-400 hover:text-red-600">
                        <img src={actions} className="size-6" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-6">
            <span className="text-sm text-gray-500">Rows per page: 5</span>
            <div className="flex items-center space-x-2">
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <span>&lt;</span>
              </button>
              <span className="px-3 py-1 border-gray-500 border rounded text-sm">1</span>
              <button className="p-1 text-gray-400 hover:text-gray-600">
                <span>&gt;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateCoupons;