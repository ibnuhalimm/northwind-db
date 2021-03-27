import axios from 'axios';
import React, { useEffect, useState } from 'react';
import API from '../constant/API';
import Modal from '../components/Modal';
import ModalContent from '../components/ModalContent';
import ModalHeader from '../components/ModalHeader';
import ModalTitle from '../components/ModalTitle';
import ModalBody from '../components/ModalBody';


function Customers() {
    const [ customers, setCustomers ] = useState([]);
    const [ isMore, setIsMore ] = useState(false);
    const [ page, setPage ] = useState(1);

    const [ customer, setCustomer ] = useState({});
    const [ showModal, setShowModal ] = useState(false);


    useEffect(() => {
        _fetchCustomers(1);
    }, []);


    const _fetchCustomers = (page) => {
        setIsMore(false);

        axios.get(API.GET_CUSTOMERS + '?order=first_name,asc&page=' + page + ',10')
            .then(response => {
                let data = response.data;
                let allCustomers = [ ...customers, ...data.records ];

                setCustomers(allCustomers);
                if (allCustomers.length < data.results) {
                    setIsMore(true);
                    setPage(page += 1);
                }
            })
            .catch(err => {
                console.log(err.data);
            });
    };


    const detailCustomerHandler = (id) => {
        _fetchSingleCustomer(id);
    };


    const _fetchSingleCustomer = (id) => {
        axios.get(API.GET_CUSTOMERS + '/' + id)
            .then(response => {
                let customer = response.data;
                setCustomer(customer);
                setShowModal(true);
            })
            .catch(err => {
                console.log(err.data);
            });
    };


    const closeModalHandler = () => {
        setShowModal(false);
        setCustomer({});
    }


    return (
        <>
            <h1 className="text-2xl">Customers</h1>
            <div className="mt-5 w-full overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border border-t-0 border-r-0 border-l-0 border-gray-300">
                            <th className="px-3 py-2 text-left">No</th>
                            <th className="px-3 py-2 text-left">Company</th>
                            <th className="px-3 py-2 text-left">First Name</th>
                            <th className="px-3 py-2 text-left">Last Name</th>
                            <th className="px-3 py-2 text-left">Email Address</th>
                            <th className="px-3 py-2 text-left">Job Title</th>
                            <th className="px-3 py-2 text-left">Business Phone</th>
                            <th className="px-3 py-2 text-left">###</th>
                        </tr>
                    </thead>
                    <tbody>
                        {customers.map((customer, idx) => {
                            return (
                                <tr key={idx}>
                                    <td className="px-3 py-2">{idx+1}</td>
                                    <td className="px-3 py-2">{customer.company}</td>
                                    <td className="px-3 py-2">{customer.first_name}</td>
                                    <td className="px-3 py-2">{customer.last_name}</td>
                                    <td className="px-3 py-2">{customer.email_address}</td>
                                    <td className="px-3 py-2">{customer.job_title}</td>
                                    <td className="px-3 py-2">{customer.business_phone}</td>
                                    <td className="px-3 py-2">
                                        <button
                                            type="button"
                                            className="outline-none focus:outline-none px-4 py-1 border border-solid bg-green-600 hover:bg-opacity-80 border-green-700 text-white shadow-md rounded-full text-sm transition duration-300"
                                            onClick={() => detailCustomerHandler(customer.id)}>
                                                Detail
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>

            {isMore
                ?   <div className="mt-5 py-4 text-center border border-r-0 border-b-0 border-l-0 border-gray-300">
                        <button
                            type="button"
                            className="outline-none focus:outline-none px-5 py-2 border border-solid bg-indigo-600 hover:bg-opacity-80 border-indigo-700 text-white shadow-md rounded-full text-sm transition duration-300"
                            onClick={() => _fetchCustomers(page)}>
                                Load More
                        </button>
                    </div>
                :   null
            }


            <Modal isOpen={showModal}>
                <ModalContent>
                    <ModalHeader>
                        <ModalTitle text="Detail" />
                    </ModalHeader>
                    <ModalBody>
                        <div>
                            <table className="w-full">
                                <tbody>
                                    <tr>
                                        <td className="px-4 py-2 w-1/3 text-gray-600">Company</td>
                                        <td className="px-4 py-2 w-1 text-gray-600">:</td>
                                        <td className="px-4 py-2">
                                            {customer.company}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 w-1/3 text-gray-600">First Name</td>
                                        <td className="px-4 py-2 w-1 text-gray-600">:</td>
                                        <td className="px-4 py-2">
                                            {customer.first_name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 w-1/3 text-gray-600">Last Name</td>
                                        <td className="px-4 py-2 w-1 text-gray-600">:</td>
                                        <td className="px-4 py-2">
                                            {customer.last_name}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 w-1/3 text-gray-600">Job Title</td>
                                        <td className="px-4 py-2 w-1 text-gray-600">:</td>
                                        <td className="px-4 py-2">
                                            {customer.job_title}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 w-1/3 text-gray-600">Email Address</td>
                                        <td className="px-4 py-2 w-1 text-gray-600">:</td>
                                        <td className="px-4 py-2">
                                            {customer.email_address}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 w-1/3 text-gray-600">Business Phone</td>
                                        <td className="px-4 py-2 w-1 text-gray-600">:</td>
                                        <td className="px-4 py-2">
                                            {customer.business_phone}
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-2 w-1/3 text-gray-600">Address</td>
                                        <td className="px-4 py-2 w-1 text-gray-600">:</td>
                                        <td className="px-4 py-2">
                                            {customer.address}, {customer.city}, {customer.state_province}, {customer.country_region}
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-10 text-center">
                            <button
                                type="button"
                                className="outline-none focus:outline-none px-4 py-1 border border-solid bg-green-600 hover:bg-opacity-80 border-green-700 text-white shadow-md rounded-full transition duration-300"
                                onClick={closeModalHandler}>
                                    Close
                            </button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Customers;