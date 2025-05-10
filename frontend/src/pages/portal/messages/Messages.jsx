import React from 'react';
import { BookOpen, CheckCircle, AlertCircle } from 'lucide-react';

const notifications = [
  {
    icon: <BookOpen className="w-5 h-5 text-indigo-500" />,
    title: 'New Course Material Available',
    time: '2h ago',
    message: (
      <>
        New lecture slides for <strong>Introduction to Data Science</strong> have been uploaded. Check the{' '}
        <span className="text-indigo-600 font-semibold">Course Materials</span> section.
      </>
    ),
    bg: 'bg-indigo-50',
  },
  {
    icon: <CheckCircle className="w-5 h-5 text-green-500" />,
    title: 'Assignment Submitted',
    time: '4h ago',
    message: (
      <>
        You successfully submitted <strong>Assignment 2</strong> for <strong>Web Development</strong>. Good luck!
      </>
    ),
    bg: 'bg-green-50',
  },
  {
    icon: <AlertCircle className="w-5 h-5 text-red-500" />,
    title: 'Upcoming Quiz Reminder',
    time: '1d ago',
    message: (
      <>
        A quiz for <strong>Machine Learning</strong> is scheduled for{' '}
        <span className="text-red-600 font-semibold">Monday at 10:00 AM</span>. Be sure to review the latest topics.
      </>
    ),
    bg: 'bg-red-50',
  },
];

export default function Messages() {
  return (
    <div className="max-w-xl mx-auto p-4">
      <div className="bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex justify-between items-center px-4 py-2 border-b">
          <h2 className="text-lg font-semibold">Notifications</h2>
          <button className="text-green-600 text-sm hover:underline">Mark all as read</button>
        </div>
        <div className="divide-y">
          <div className="bg-gray-50 px-4 py-2 text-sm text-gray-600 font-medium">Today</div>
          {notifications.map((notif, index) => (
            <div key={index} className={`flex gap-4 p-4 ${notif.bg}`}>
              <div className="flex-shrink-0 mt-1">{notif.icon}</div>
              <div className="flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="font-semibold">{notif.title}</h3>
                  <span className="text-xs text-gray-500">{notif.time}</span>
                </div>
                <p className="text-sm mt-1 text-gray-700">{notif.message}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center p-3 border-t text-sm text-blue-600 font-medium hover:underline cursor-pointer">
          View all notifications
        </div>
      </div>
    </div>
  );
}
