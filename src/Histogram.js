import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

const Histogram = ({ words, wordCnt }) => {

    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    const options = {
        plugins: {
            title: {
                display: true,
                text: '20 Most Frequent Word Bar Chart',
            },
        },
    };

    const chartData = {
        labels: words,
        datasets: [
            {
                label: "word count",
                data: wordCnt,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
        ],
    }

    return (
        <div style={{ minWidth: "1250px" }} >
            <Bar
                width={500}
                data={chartData}
                height={200}
                options={options}
            />
        </div>
    )
}

export default Histogram;