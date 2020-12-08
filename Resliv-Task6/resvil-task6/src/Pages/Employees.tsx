import React, { useEffect, useState, useCallback } from 'react';
import HTTPWrapper from '../utils/HTTPWrapper';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';
import './Employees.css';
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';

interface IEmployee {
    last_name?: string,
    first_name: string,
}

export const Employees = () => {

    const [employees, setEmployees] = useState<string[]>([]);
    const [newName, setNewName] = useState<string>();

    useEffect(() => {
        const http = new HTTPWrapper();
        http.get('users?per_page=12')
            .then(res => {
                const result = res.data.data.map((item: IEmployee) => {
                    return item.first_name;
                })
                setEmployees(result);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);

    const deleteEmployee = useCallback((e: React.MouseEvent<HTMLElement>, name: string) => {
        if (employees) {
            const index = employees.indexOf(name);
            const arr = employees.slice();
            delete arr[index];
            setEmployees(arr);
        }
    }, [employees]);

    const addEmployee = useCallback((e: React.MouseEvent<HTMLElement>) => {
        if (newName) {
            const arr = employees.slice();
            arr.unshift(newName);
            setEmployees(arr);
            setNewName('');
        }
    }, [newName]);

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setNewName(e.target.value);
    }, [setNewName]);

    return (
        <div className='container'>
            <div>
                <TextField id="name" type="text" value={newName} onChange={handleChange} />
                <Button variant="contained" onClick={addEmployee}>Add</Button>
            </div>

            {employees ? employees.map((item: string, index: number) => {
                return (
                    <div className='container-employee' key={index}>
                        <p>{item}</p>
                        <div className='icon' onClick={(e: React.MouseEvent<HTMLElement>) => { deleteEmployee(e, item) }}>
                            <DeleteOutlineIcon />
                        </div>

                    </div>

                )
            }) : null}

        </div>
    )
}