import { LineChart as LC, Line,XAxis,YAxis } from 'recharts';

 
 const LineChart = () => {
    const studentData = [
        { id: 1, name: "Student 1", mathMarks: 85, chemistryMarks: 75, physicsMarks: 92 },
        { id: 2, name: "Student 2", mathMarks: 92, chemistryMarks: 88, physicsMarks: 78 },
        { id: 3, name: "Student 3", mathMarks: 78, chemistryMarks: 80, physicsMarks: 85 },
        { id: 4, name: "Student 4", mathMarks: 88, chemistryMarks: 92, physicsMarks: 75 },
        { id: 5, name: "Student 5", mathMarks: 96, chemistryMarks: 87, physicsMarks: 91 },
        { id: 6, name: "Student 6", mathMarks: 70, chemistryMarks: 65, physicsMarks: 72 },
        { id: 7, name: "Student 7", mathMarks: 82, chemistryMarks: 79, physicsMarks: 88 },
        { id: 8, name: "Student 8", mathMarks: 91, chemistryMarks: 84, physicsMarks: 93 },
        { id: 9, name: "Student 9", mathMarks: 75, chemistryMarks: 68, physicsMarks: 77 },
        { id: 10, name: "Student 10", mathMarks: 89, chemistryMarks: 90, physicsMarks: 86 }
      ];
      
    
      

    return (
        <div>
            <LC width={700} height={300} data={studentData}>
                <Line dataKey="mathMarks" stroke='red'></Line>
                <Line dataKey={'physicsMarks'} stroke='yellow'></Line>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis ></YAxis>
            </LC>
        </div>
    );
 };
 
 export default LineChart;