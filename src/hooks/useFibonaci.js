
import { useCallback, useContext, useEffect, useState } from 'react';
import { Alert, View, Text } from 'react-native';

const useFibonaci = () => {
    const [rows, setRows] = useState(0)
    const [colums, setColums] = useState(0)
    const [loading, setLoading] = useState(false)
    const [tableData, setTableData] = useState([])

    const handleSave = () => {
        let angkaAwal = -1
        let angkaBerikutnya = 1

        var myOutput =[]

        for (let i = 1; i < rows; i++) {
            for (let j = 1; j < colums; j++) {
                const hasil = angkaAwal + angkaBerikutnya;
                angkaAwal = angkaBerikutnya;
                angkaBerikutnya = hasil;
                myOutput.push(<View><Text>{hasil}</Text></View>)

            }
        }
         setTableData(myOutput)
        
    }
    return {
        loading,
        setRows,
        setColums,
        handleSave,
        tableData
    };
};

export default useFibonaci;
