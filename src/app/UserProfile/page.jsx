import React from "react";

const Page = () => {
  const user = {
    name: "Sudais Ahmad",
    email: "sudais@example.com",
    joined: "March 2024",
    profilePic:
      "https://images.unsplash.com/photo-1603415526960-f7e0328d2533?auto=format&fit=crop&w=600&q=80",
  };

  const stats = [
    { label: "Total Projects", value: 12 },
    { label: "Tools Used", value: 8 },
    { label: "Articles Generated", value: 145 },
  ];

  const recentActivity = [
    { title: "Generated a blog post on AI Trends", date: "Nov 11, 2025" },
    { title: "Updated profile picture", date: "Nov 10, 2025" },
    { title: "Used Article Generator Tool", date: "Nov 09, 2025" },
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50 dark:bg-[#0e0e0f] text-gray-900 dark:text-gray-100 p-8">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-4">
            <h1 className="text-3xl font-bold">User Dashboard</h1>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition">
              Edit Profile
            </button>
          </div>

          {/* Profile Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 bg-white/70 dark:bg-[#1b1c1e]/70 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-28 h-28 rounded-full object-cover border-4 border-blue-600"
            />
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">{user.name}</h2>
              <p className="text-gray-600 dark:text-gray-400">{user.email}</p>
              <p className="text-sm text-gray-500">Joined: {user.joined}</p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((item, i) => (
              <div
                key={i}
                className="bg-white/70 dark:bg-[#1b1c1e]/70 backdrop-blur-md rounded-2xl p-5 text-center shadow-lg"
              >
                <h3 className="text-lg font-medium">{item.label}</h3>
                <p className="text-3xl font-bold text-blue-600 mt-2">
                  {item.value}
                </p>
              </div>
            ))}
          </div>

          {/* Recent Activity */}
          <div className="bg-white/70 dark:bg-[#1b1c1e]/70 backdrop-blur-md p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold mb-4 border-b pb-2">
              Recent Activity
            </h3>
            <ul className="space-y-3">
              {recentActivity.map((activity, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between border-b pb-2 last:border-0"
                >
                  <span>{activity.title}</span>
                  <span className="text-sm text-gray-500">{activity.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
