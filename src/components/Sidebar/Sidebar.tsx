import React, { useState, useEffect } from "react";

const sidebarItems = [
  {
    label: "Home",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0L5 10m7-7v18"></path></svg>',
  },
  {
    label: "Search",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a4 4 0 11-8 0 4 4 0 018 0zm0 0c1.333 2.666 4 4 8 4m0 0l-6 6m6-6a8 8 0 11-16 0 8 8 0 0116 0z"></path></svg>',
  },
  {
    label: "Settings",
    icon: '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.894 4.879A16.027 16.027 0 0112 2c4.411 0 8 3.589 8 8a7.963 7.963 0 01-2.342 5.657l-.526.526A15.842 15.842 0 0019 12c0-4.411-3.589-8-8-8-1.53 0-2.958.44-4.178 1.201l-.525-.525z"></path></svg>',
  },
];

const Sidebar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768); // Adjust the breakpoint as needed
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, []);

  return (
    <div
      className={`flex flex-col justify-between h-screen bg-blue-500 text-white ${
        isMobile ? "fixed bottom-0 left-0 right-0" : "w-64"
      }`}
    >
      <div className="p-4">
        {/* Sidebar content */}
        {sidebarItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-2 py-2">
            <div
              dangerouslySetInnerHTML={{ __html: item.icon }}
              className="w-6 h-6"
            />
            <span>{item.label}</span>
          </div>
        ))}
      </div>

      {isMobile && (
        <div className="flex justify-center py-2 bg-blue-700">
          {/* Bottom tab content */}
          {sidebarItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div
                dangerouslySetInnerHTML={{ __html: item.icon }}
                className="w-6 h-6"
              />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Sidebar;
