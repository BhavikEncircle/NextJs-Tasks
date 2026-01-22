import { feedbacks } from "@/app/lib/feedbackStore";
export default function FeedbackList() {
  if (feedbacks.length === 0) {
    return (
      <div className="text-center mt-10">
        <p className="text-gray-500 text-sm">No Feedbacks yet.</p>
      </div>
    );
  }
  return (
    <div className="max-w-3xl mx-auto mt-12 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold text-gray-100">User Feedback</h2>
        <p className="text-sm text-gray-400">Our feedbacks</p>
      </div>

      <div className="space-y-4">
        {feedbacks.map((item) => (
          <div
            key={item.id}
            className="bg-gray-800 border border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="font-semibold text-gray-100">{item.name}</p>
                <p className="text-sm text-gray-400">{item.email}</p>
              </div>
            </div>
            <p className="mt-4 text-gray-300 leading-relaxed">{item.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
