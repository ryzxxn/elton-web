import React, { useEffect } from "react";
import axios, { AxiosResponse } from "axios";

const WakeupProtocol: React.FC = () => {
  useEffect(() => {
    const pingEndpoints = async () => {
      try {
        // Ping the first endpoint
        const response1: AxiosResponse<any> = await axios.get('https://pixel-websocket.onrender.com/pixel-wake');
        // console.log('Response from https://pixel-websocket.onrender.com/pixel-wake:', response1.data);

        // Ping the second endpoint
        const response2: AxiosResponse<any> = await axios.get('https://upload-io.onrender.com/pis-wake');
        // console.log('Response from https://upload-io.onrender.com/pis-wake:', response2.data);
      } catch (error: any) {
        console.error('Error:', error.message);
      }
    };

    pingEndpoints();
  }, []);

  return (
    <></>
  );
};

export default WakeupProtocol;
