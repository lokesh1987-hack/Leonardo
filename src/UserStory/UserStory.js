import React, { useState, useEffect } from 'react';
import "./userstory.css";
import axios from "axios";
import { results } from '../Data/data';

const UserStory = () => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState();
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
    }

    const handleReset = () => {
        setLoading(false)
    }
    // const getData = async() => {
    //     const res = await axios.get("/")
    //     console.log(res.json())

    // }
    // useEffect(() => {
    //     getData()
    // });

    //Importing Results Data 
    const result_data = results.Results
    console.log(loading)

    return (

        <div className="login-container">
            <div class="container d-flex justify-content-around">
                <img className='logo-container-svg align-self-center' src="./images/leonardo.svg" alt="" />
                <section class="border p-5 w-50 mt-5 shadow">
                    <form>
                        <div class="mb-3 d-flex flex-column">
                            <label for="exampleInputEmail1" class="form-label text-dark m-auto mb-3 h3"
                            >Enter Your User Story</label>
                            <textarea class="form-control" name="text" onChange={(e) => setData(e.target.value)}
                                id="exampleFormControlTextarea1" rows="3"
                                placeholder="Enter Your User Story..."
                            >

                            </textarea>
                        </div>
                        <div className=" d-flex items-around justify-content-center">
                            <button class="btn btn-primary m-auto" onClick={handleSubmit}>Submit</button>
                            <button type="reset" class="btn btn-danger m-auto" onClick={handleReset}>Reset</button>
                        </div>
                    </form>
                </section>
                <img className='logo-container align-self-center' src="./images/coreflex.png" alt="" />
            </div>
            {

                loading && <div class="container p-5">

                    <h1 class="text-center">Defect Description</h1>
                    <div class="d-flex justify-content-center ">
                        <table class="table table-hover border shadow w-75 p-5 mt-4 table-container">
                            <thead>
                                <tr>
                                    <th scope="col">No.</th>
                                    <th scope="col">Defect Descriptions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    result_data.map((data, i) => {
                                        return (
                                            <tr>
                                                <th scope="row">{i + 1}</th>
                                                <td colspan="2">{data}</td>
                                            </tr>
                                        )
                                    }

                                    )
                                }


                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div>
    )
}

export default UserStory