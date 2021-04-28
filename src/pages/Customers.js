import React, { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import ModalContent from '../components/ModalContent';
import ModalHeader from '../components/ModalHeader';
import ModalTitle from '../components/ModalTitle';
import ModalBody from '../components/ModalBody';
import Button from '../components/Button';
import InputText from '../components/InputText';
import FormGroup from '../components/FormGroup';
import FormLabel from '../components/FormLabel';
import FormField from '../components/FormField';
import CustomerService from '../services/CustomerService';
import ButtonTable from '../components/ButtonTable';


function Customers() {
    const [ customers, setCustomers ] = useState([]);
    const [ isMore, setIsMore ] = useState(false);
    const [ page, setPage ] = useState(1);
    const [ newCustomerId, setNewCustomerId ] = useState(0);

    const initialCustomer = {
        company: '',
        first_name: '',
        last_name: '',
        job_title: '',
        email_address: '',
        business_phone: '',
        address: '',
        city: '',
        state_province: '',
        country_region: ''
    };

    const [ customer, setCustomer ] = useState(initialCustomer);
    const [ showDeleteModal, setShowDeleteModal ] = useState(false);
    const [ showFormModal, setShowFormModal ] = useState(false);
    const [ modalTitleText, setModalTitleText ] = useState('');
    const [ mode, setMode ] = useState('create');


    useEffect(() => {
        _fetchCustomers();
    }, [page, newCustomerId]);


    const renderTable = (data, totalData) => {
        if (page === 1) {
            setCustomers(customers.splice(0, customers.length));
        }

        let allCustomers = [ ...customers, ...data ];

        setCustomers(allCustomers);
        setIsMore(false);
        if (allCustomers.length < totalData) {
            setIsMore(true);
        }
    }


    const loadMoreHandler = () => {
        setPage(page + 1);
    }


    const _fetchCustomers = async () => {
        try {
            let { data, total } = await CustomerService.getAllCustomers(page);
            renderTable(data, total);

        } catch (error) {
            alert(error);
        }

    };


    const editCustomerHandler = async (id) => {
        try {
            let customer = await CustomerService.getSingleCustomer(id);
            setCustomer(customer);
            setShowFormModal(true);

            setModalTitleText('Edit Customer');
            setMode('edit');

        } catch (error) {
            alert(error);
        }
    };


    const cancelSaveCustomerHandler = () => {
        setShowFormModal(false);
        setCustomer(initialCustomer);
    }


    const addNewCustomerHandler = () => {
        setModalTitleText('New Customer');
        setMode('create');
        setShowFormModal(true);
    }


    const onChangeHandler = event => {
        setCustomer({
            ...customer,
            [event.target.name]: event.target.value
        });
    }


    const saveCustomerHandler = async () => {
        try {
            setPage(1);

            if (mode === 'create') {
                let customerId = await CustomerService.storeNewCustomer(customer);
                setNewCustomerId(customerId);
            }

            if (mode === 'edit') {
                let dummyCustomerId = Math.random() * 0.5;

                await CustomerService.updateCustomer(customer.id, customer);
                setNewCustomerId(dummyCustomerId);
            }

            setCustomer(initialCustomer);
            setShowFormModal(false);

        } catch (error) {
            alert(error);
        }
    }


    const deleteCustomerHandler = (id) => {
        setCustomer({
            ...customer,
            ...{id: id}
        });

        setShowDeleteModal(true);
    }


    const cancelDeleteCustomerHandler = () => {
        setCustomer(initialCustomer);
        setShowDeleteModal(false);
    }


    const confirmDeleteCustomerHandler = async () => {
        try {
            let dummyCustomerId = Math.random() * 0.5;

            await CustomerService.deleteCustomer(customer.id);
            setNewCustomerId(dummyCustomerId);

            setCustomer(initialCustomer);
            setShowDeleteModal(false);

        } catch (error) {
            alert(error);
        }
    }


    return (
        <>
            <h1 className="text-2xl mb-3">Customers</h1>
            <div className="mb-3">
                <Button
                    color="indigo"
                    onClick={() => addNewCustomerHandler()}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                    <span className="ml-1">
                        New Customer
                    </span>
                </Button>
            </div>
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
                                        <ButtonTable
                                            type="button"
                                            color="green"
                                            onClick={() => editCustomerHandler(customer.id)}>
                                                Edit
                                        </ButtonTable>
                                        <ButtonTable
                                            type="button"
                                            color="red"
                                            onClick={() => deleteCustomerHandler(customer.id)}>
                                                Delete
                                        </ButtonTable>
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
                            onClick={(event) => loadMoreHandler()}>
                                Load More
                        </button>
                    </div>
                :   null
            }


            <Modal isOpen={showFormModal}>
                <ModalContent>
                    <ModalHeader>
                        <ModalTitle text={modalTitleText} />
                    </ModalHeader>
                    <ModalBody>
                        <div className="mb-10">
                            <FormGroup>
                                <FormLabel isRequired={true}>
                                    Company Name
                                </FormLabel>
                                <FormField>
                                    <InputText type="text" name="company" onChange={onChangeHandler} value={customer.company} />
                                </FormField>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel isRequired={true}>
                                    First Name
                                </FormLabel>
                                <FormField>
                                    <InputText type="text" name="first_name" onChange={onChangeHandler} value={customer.first_name} />
                                </FormField>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel isRequired={true}>
                                    Last Name
                                </FormLabel>
                                <FormField>
                                    <InputText type="text" name="last_name" onChange={onChangeHandler} value={customer.last_name} />
                                </FormField>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel isRequired={true}>
                                    Job Title
                                </FormLabel>
                                <FormField>
                                    <InputText type="text" name="job_title" onChange={onChangeHandler} value={customer.job_title} />
                                </FormField>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel isRequired={true}>
                                    Email Address
                                </FormLabel>
                                <FormField>
                                    <InputText type="email" name="email_address" onChange={onChangeHandler} value={customer.email_address} />
                                </FormField>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel isRequired={true}>
                                    Business Phone
                                </FormLabel>
                                <FormField>
                                    <InputText type="text" name="business_phone" onChange={onChangeHandler} value={customer.business_phone} />
                                </FormField>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel isRequired={true}>
                                    Address
                                </FormLabel>
                                <FormField>
                                    <InputText type="text" name="address" onChange={onChangeHandler} value={customer.address} />
                                </FormField>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel isRequired={true}>
                                    City
                                </FormLabel>
                                <FormField>
                                    <InputText type="text" name="city" onChange={onChangeHandler} value={customer.city} />
                                </FormField>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel isRequired={true}>
                                    State / Province
                                </FormLabel>
                                <FormField>
                                    <InputText type="text" name="state_province" onChange={onChangeHandler} value={customer.state_province} />
                                </FormField>
                            </FormGroup>
                            <FormGroup>
                                <FormLabel isRequired={true}>
                                    Country / Region
                                </FormLabel>
                                <FormField>
                                    <InputText type="text" name="country_region" onChange={onChangeHandler} value={customer.country_region} />
                                </FormField>
                            </FormGroup>
                        </div>
                        <div className="text-center mb-5">
                            <Button
                                color="red"
                                onClick={() => cancelSaveCustomerHandler()}>
                                Cancel
                            </Button>
                            <Button
                                color="indigo"
                                onClick={() => saveCustomerHandler()}>
                                Save Data
                            </Button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>


            <Modal isOpen={showDeleteModal}>
                <ModalContent size="small">
                    <ModalHeader>
                        <ModalTitle text="Delete Customer" />
                    </ModalHeader>
                    <ModalBody>
                        <div className="text-center">
                            Are you sure to delete this customer data?
                        </div>
                        <div className="mt-10 text-center">
                            <Button
                                color="gray"
                                onClick={() => cancelDeleteCustomerHandler()}>
                                No
                            </Button>
                            <Button
                                color="red"
                                onClick={() => confirmDeleteCustomerHandler()}>
                                Yes, Delete
                            </Button>
                        </div>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    );
};

export default Customers;