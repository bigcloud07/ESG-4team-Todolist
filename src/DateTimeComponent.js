import React, { useState, useEffect } from 'react';

const DateTimeComponent = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  // 1초마다 현재 날짜와 시간 업데이트
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // 컴포넌트 언마운트 시 인터벌 제거
    return () => clearInterval(intervalId);
  }, []);

  // 날짜와 시간을 형식에 맞게 포맷팅
  const formattedDateTime = currentDateTime.toLocaleString();

  return (
    <div>
      
      <p>{formattedDateTime}</p>
    </div>
  );
};

export default DateTimeComponent;
