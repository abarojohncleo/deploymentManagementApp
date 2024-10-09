import React, { useEffect, useState } from "react";


/* API */
import { getEngineers, getEngineersType } from "../api/engineers/engineers";

import PageTitle from "../components/global/PageTitle";
import PageContent from "../components/global/PageContent";

import {
  SortIcon,
  FilterIcon,
  SearchIcon,
  DeleteIcon,
  EditIcon,
  FemaleIcon,
  MaleIcon,
  ViewIcon
} from '../assets/icons';

import { Card, CardHeader, CardContent, Grid } from "@mui/material";

const Engineers = () => {
  const [engineers, setEngineers] = useState([]);
  const [sorted, setSorted] = useState(false);
  const [filter, setFilter] = useState(false)

  const handleFilterItem = () => {
    setFilter(!filter)
  }

  const handleSortItem = () => {
    setSorted(!sorted)
  }

  useEffect(() => {
    console.log('fetching engineers')
    const fetchEngineers = async () => {
      let response = await getEngineers();
      if(response) {
        setEngineers(response.results)
      }
    };
    fetchEngineers();
  },[])

  return (
    <div>
      <PageTitle title={'Engineers'}/>
      <PageContent>
        <div className="flex justify-between">
          <button className="text-sm bg-primaryBlue-900 text-white-900 p-2 rounded-md hover:bg-primaryBlue-400">
            Add Engineer
          </button>
          <div className="flex justify-between items-center">
            <div className="px-2">
              <button className={sorted ? "border-primaryBlue-900 mx-2 border rounded-md p-1 bg-primaryBlue-100" : "border-primaryBlue-900 mx-2 border rounded-md p-1 hover:bg-primaryBlue-100"} onClick={handleSortItem}>
                <SortIcon width="20px" className="" color={sorted ? "#ffffff" :'#15136C'}/>
              </button>
              <button className={filter ? "border-primaryBlue-900 mx-2 border rounded-md p-1 bg-primaryBlue-100" : "border-primaryBlue-900 mx-2 border rounded-md p-1 hover:bg-primaryBlue-100"} onClick={handleFilterItem}>
                <FilterIcon width="20px" height="21px" color={filter ? "#ffffff" :'#15136C'}/>
              </button>
            </div>
            <div className="flex border justify-between p-2 rounded-xl">
              <input placeholder="Search engineer's name" style={{outline:'none'}}/>
              <SearchIcon width="20px"/>
            </div>
          </div>
        </div>
        <div>
          {engineers && engineers.map((engineer) => (
            <div key={engineer.id} />
          ))}
        </div>
        <Grid container rowSpacing={1} sx={{mt:2}} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {engineers && engineers.map((engineer, index) => (
          <Grid key={index} item xs={3}>
            <Card>
              <CardContent>
                <div className="flex justify-end items-center">
                  <button className="mx-1" onClick={() => console.log('delete')}>
                    <DeleteIcon color="red" width="20px"/>
                  </button>
                  <button className="mx-1" onClick={() => console.log('edit')}>
                    <ViewIcon color="green" width="20px" height="25px"/>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <div className="border p-5 rounded-full mx-5">
                    <MaleIcon width="60px" color="#15136C"/>
                  </div>
                  <div className="block">
                    <p>{engineer.first_name} {engineer.middle_name} {engineer.last_name}</p>
                    <p>Software Engineer</p>
                  </div>
                </div>
                <div className="w-full mt-5 text-center">
                  <p><strong>Email :</strong> {engineer.email}</p>
                  <p><strong>Contact # :</strong> {engineer.contact_num}</p>
                </div>
              </CardContent>
            </Card>
          </Grid>
        ))}
        </Grid>
      </PageContent>
    </div>
  )
}

export default Engineers;