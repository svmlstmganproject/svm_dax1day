import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Dax1DayBacktestData = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://node-server-svm.onrender.com/getDax1DayBacktestTaData');  // Updated endpoint
                setData(response.data);
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            <p>DAX 1 Day Backtest Data</p>
            <table>
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Date</th>
                        <th>Var2</th>
                        <th>Closed Price</th>
                        <th>Return Of DAX</th>
                        <th>Direction Of DAX</th>
                        <th>Crash Indicator DAX 10</th>
                        <th>Performance CI Of DAX 10 (Window 5)</th>
                        <th>Forecast CI Of DAX 10 (Window 5)</th>
                        <th>Market Crash Of DAX 10 (Window 5)</th>
                        <th>Performance DI Of DAX 10 (Window 5)</th>
                        <th>Forecast DI Of DAX 10 (Window 5)</th>
                        <th>Market Crash DI Of DAX 10 (Window 5)</th>
                        <th>BackTest Profit (Window 5)</th>
                        <th>Performance CI Of DAX 10 (Window 10)</th>
                        <th>Forecast CI Of DAX 10 (Window 10)</th>
                        <th>Market Crash Of DAX 10 (Window 10)</th>
                        <th>Performance DI Of DAX 10 (Window 10)</th>
                        <th>Forecast DI Of DAX 10 (Window 10)</th>
                        <th>Market Crash DI Of DAX 10 (Window 10)</th>
                        <th>BackTest Profit (Window 10)</th>
                        <th>Performance CI Of DAX 10 (Window 30)</th>
                        <th>Forecast CI Of DAX 10 (Window 30)</th>
                        <th>Market Crash Of DAX 10 (Window 30)</th>
                        <th>Performance DI Of DAX 10 (Window 30)</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item => (
                        <tr key={item._id}>
                            <td>{item.no_}</td>
                            <td>{item.date}</td>
                            <td>{item.Var2}</td>
                            <td>{item.closedPrice}</td>
                            <td>{item.ReturnOfDax}</td>
                            <td>{item.directionOfDax}</td>
                            <td>{item.CrashIndicatorDax_10__}</td>
                            <td>{item.PerformanceCIOfDax_10__Window5}</td>
                            <td>{item.ForecastCIOfDax_10__Window5}</td>
                            <td>{item.MarketCrashOfDax_10__Window5}</td>
                            <td>{item.PerformanceDIOfDax_10__Window5}</td>
                            <td>{item.ForecastDIOfDax_10__Window5}</td>
                            <td>{item.MarketCrashDIOfDax_10__Window5}</td>
                            <td>{item.BackTest_Profit_Window5}</td>
                            <td>{item.PerformanceCIOfDax_10__Window10}</td>
                            <td>{item.ForecastCIOfDax_10__Window10}</td>
                            <td>{item.MarketCrashOfDax_10__Window10}</td>
                            <td>{item.PerformanceDIOfDax_10__Window10}</td>
                            <td>{item.ForecastDIOfDax_10__Window10}</td>
                            <td>{item.MarketCrashDIOfDax_10__Window10}</td>
                            <td>{item.BackTest_Profit_Window10}</td>
                            <td>{item.PerformanceCIOfDax_10__Window30}</td>
                            <td>{item.ForecastCIOfDax_10__Window30}</td>
                            <td>{item.MarketCrashOfDax_10__Window30}</td>
                            <td>{item.PerformanceDIOfDax_10__Window30}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dax1DayBacktestData;
