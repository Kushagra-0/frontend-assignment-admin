import searchNormal from "../../../../../assets/icons/navabar/search-normal.png"
import { ArrowPathIcon, PlusIcon, ArrowDownTrayIcon } from "@heroicons/react/16/solid";
import { pendingPaymentRequests2 } from "../../../../../constants/payments/PendingPaymentRequests2";

const PaymentHistory = () => {
  return (
    <div className="pb-12">
      <div className="bg-white rounded-2xl shadow">
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex gap-6 items-cente">
              <h3 className="text-lg font-medium text-gray-900">Pending Payment Requests</h3>
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
            <table className="min-w-[1600px] w-full">
              <thead>
                <tr className="border-gray-200 items-center justify-center">
                  <th className="text-left py-3 px-4 font-semibold"></th>
                  <th className="text-left py-3 px-4 font-semibold">Doctor Name</th>
                  <th className="text-left py-3 px-4 font-semibold">E-email</th>
                  <th className="text-left py-3 px-4 font-semibold">Mobile</th>
                  <th className="text-left py-3 px-4 font-semibold">Amount Withdrawl</th>
                  <th className="text-left py-3 px-4 font-semibold">Requested Date</th>
                  <th className="text-left py-3 px-4 font-semibold">Wallet Amount</th>
                  <th className="text-left py-3 px-4 font-semibold">Details</th>
                  <th className="text-left py-3 px-4 font-semibold">Status</th>
                  <th className="text-left py-3 px-4 font-semibold">Approval Date</th>
                </tr>
              </thead>
              <tbody>
                {pendingPaymentRequests2.map((request) => (
                  <tr key={request.id} className="border-b border-gray-300">
                    <td>
                      <input type="checkbox"></input>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center rounded-full">
                        <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                            <img src={request.icon} className="rounded-full" />
                        </div>
                        <span className="text-sm text-gray-900">{request.doctorName}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 text-sm text-gray-900">{request.email}</td>
                    <td className="px-4 text-sm text-gray-900">{request.mobile}</td>
                    <td className="pl-10 py-4 px-4 text-sm text-gray-900 items-center">{request.amountWithdrawal}</td>
                    <td className="px-4 text-sm text-gray-900">{request.requestedDate}</td>
                    <td className="px-4 text-sm text-gray-900">{request.walletAmount}</td>
                    <td className="px-4 text-sm text-[#3A643B] font-medium">View All</td>
                    <td className={`px-4 text-sm ${request.status === "Paid" ? "text-green-600" : "text-red-500"} text-[#3A643B]  font-medium`}>{request.status}</td>
                    <td className="px-4 text-sm text-gray-900 font-medium">{request.approvalDate}</td>
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

export default PaymentHistory;