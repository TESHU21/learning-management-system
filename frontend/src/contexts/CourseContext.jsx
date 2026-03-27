import React, { useMemo, useState, useCallback } from "react";
import { useContext, createContext } from "react";
import axiosInstance from "@/lib/axiosInstance";

const CourseContext = createContext();
export const useCourse = () => {
  return useContext(CourseContext);
};
export const CourseProvider = ({ children }) => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState([]);
  const [courseInvoices, setCourseInvoices] = useState(null);

  // function to fetch all courses
  const getCourses = useCallback(async () => {
    const response = await axiosInstance.get("/courses");
    return response;
  }, []);
  // get single courses
  const getSingleCourses = useCallback(async (courseId) => {
    const response = await axiosInstance.get(`/courses/${courseId}`);
    return response;
  }, []);
  // Get all Tracks
  const getallTracks = useCallback(async () => {
    const response = await axiosInstance.get("/tracks");
    return response;
  }, []);
  // Get Single Tracks
  const getSingleTrack = useCallback(async (trackId) => {
    const response = await axiosInstance.get(`/tracks/${trackId}`);
    return response;
  }, []);

  // Rate Tracks
  const rateTrack = useCallback(async (trackId, data) => {
    const response = await axiosInstance.post(
      `/tracks/${trackId}/ratings`,
      data,
    );
    return response;
  }, []);
  // Get  Tracks Rating
  const getTrackRatings = useCallback(async (trackId) => {
    const response = await axiosInstance.get(`/tracks/${trackId}/ratings`);
    return response;
  }, []);
  // Get  Tracks Rating
  const getallInvoices = useCallback(async () => {
    const response = await axiosInstance.get("/invoices");
    return response;
  }, []);

  // function to get singleInvoices
  const getsingleInvoices = useCallback(async (invoicesId) => {
    const response = await axiosInstance.get(`/invoices/${invoicesId}`);
    return response;
  }, []);
  // function to enroll learners by Track
  const enrollLearnersbyTrack = useCallback(async (data) => {
    const response = await axiosInstance.post("/enrollments", data);
    return response;
  }, []);
  // function to retrive  enrollments
  const getEnrollements = useCallback(async () => {
    const response = await axiosInstance.get("/enrollments");
    return response;
  }, []);
  // function to mark  invoices as paid
  const markInvoicesAsPaid = useCallback(async (data) => {
    const response = await axiosInstance.post("/markaspaid/payment", data);
    return response;
  }, []);
  // function to enroll learner to a course
  const enrollToCourse = useCallback(async (data) => {
    const response = await axiosInstance.post("/registrations", data);
    return response;
  }, []);
  const getregistrationbyLearner = useCallback(async () => {
    const response = await axiosInstance.get("/registrations");
    return response;
  }, []);

  const values = useMemo(
    () => ({
      getCourses,
      getSingleCourses,
      getallTracks,
      getSingleTrack,
      getTrackRatings,
      rateTrack,
      getallInvoices,
      getsingleInvoices,
      enrollLearnersbyTrack,
      getEnrollements,
      enrollToCourse,
      getregistrationbyLearner,
      courses,
      setCourses,
      selectedCourse,
      setSelectedCourse,
      courseInvoices,
      setCourseInvoices,
      markInvoicesAsPaid,
    }),
    [
      getCourses,
      getSingleCourses,
      getallTracks,
      getSingleTrack,
      getTrackRatings,
      rateTrack,
      getallInvoices,
      getsingleInvoices,
      enrollLearnersbyTrack,
      getEnrollements,
      enrollToCourse,
      getregistrationbyLearner,
      courses,
      selectedCourse,
      courseInvoices,
      markInvoicesAsPaid,
    ],
  );

  return (
    <CourseContext.Provider value={values}>{children}</CourseContext.Provider>
  );
};
