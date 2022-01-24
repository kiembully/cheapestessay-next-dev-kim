import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { Progress } from "reactstrap";

// components
import Content from "../../components/home/content";
import Faq from "../../components/home/faq";
import Contact from "../../components/home/contact";
import Img from "../../components/Common/image";
import Meta from "../../components/meta";

// scss
import plagCheckerCss from "../../styles/plagChecker.scss";
import HireWriter from "../../components/home/hireWriter";

// API helper
import { apiHelper, ukApiHelper } from "../../helper/apiHelper";

// Html Parser
import parse from "html-react-parser";

const PlagiarismChecker = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const [serviceData, setServiceData] = useState(null);
  const [serviceWork, setServiceWork] = useState();
  const [serviceSteps, setServiceSteps] = useState();

  // upload
  const [checking, setChecking] = useState(false);
  const [hasResult, setHasResult] = useState(false);
  const [textContent, setTextContent] = useState("");
  const [similarity, setSimilarity] = useState(Number);
  const [uniqueness, setUniqueness] = useState(Number);
  var [uploadProgress, setUploadProgress] = useState(0);
  const [uploadMessage, setUploadMessage] = useState("");
  const [uploadHasError, setUploadValidation] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");
  const contentChangeHandler = (event) => {
    setTextContent(event.target.value);
  };
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    accept:
      "application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document, application/vnd.ms-excel, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation, application/pdf, text/plain",
    maxSize: 25 * 1024 * 1024,
  });
  const files = acceptedFiles.map((file, i) => (
    <li key={file.path}>
      <svg
        width="34"
        height="40"
        viewBox="0 0 34 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M32.5602 6.27999H27.1602L26.8402 1.75999C26.8402 1.55999 26.7202 1.35999 26.5612 1.19999C26.4841 1.12164 26.3896 1.06267 26.2853 1.0279C26.181 0.993141 26.0699 0.983576 25.9612 0.999992L1.40123 2.71999C0.960232 2.75999 0.601232 3.11999 0.641232 3.59999L2.80023 34.64C2.84023 35.081 3.20023 35.4 3.64023 35.4H3.68023L7.12123 35.16V38.2C7.12123 38.64 7.48123 39.04 7.96123 39.04H32.6022C33.0432 39.04 33.4432 38.681 33.4432 38.2L33.4402 7.07999C33.3592 6.63999 33.0002 6.27999 32.5592 6.27999H32.5602ZM7.12023 7.07999V33.48L4.40023 33.68L2.36023 4.27999L25.2802 2.67999L25.5202 6.23899H7.92023C7.48023 6.27899 7.12023 6.64099 7.12023 7.07899V7.07999ZM31.7202 37.36H8.76023V7.91999H31.7602V37.36H31.7202Z"
          fill="#FBD501"
        />
        <path
          d="M12.5998 13.7601H18.9598C19.3998 13.7601 19.7998 13.4001 19.7998 12.9191C19.7998 12.4781 19.4398 12.0781 18.9598 12.0781L12.5998 12.0801C12.1598 12.0801 11.7598 12.4391 11.7598 12.9201C11.7598 13.4001 12.1198 13.7601 12.5998 13.7601ZM12.5998 17.6401H27.9198C28.3608 17.6401 28.7608 17.2811 28.7608 16.8001C28.7608 16.3601 28.4018 15.9601 27.9208 15.9601H12.5998C12.1588 15.9601 11.7588 16.3191 11.7588 16.8001C11.7588 17.2801 12.1188 17.6401 12.5988 17.6401H12.5998ZM12.5998 21.5201H27.9198C28.3608 21.5201 28.7608 21.1611 28.7608 20.6801C28.7608 20.2401 28.4018 19.8401 27.9208 19.8401H12.5998C12.1588 19.8401 11.7588 20.2001 11.7588 20.6811C11.7588 21.1591 12.1188 21.5211 12.5988 21.5211L12.5998 21.5201ZM12.5998 25.4001H27.9198C28.3608 25.4001 28.7608 25.0401 28.7608 24.5601C28.7608 24.1191 28.4018 23.7191 27.9208 23.7191L12.6008 23.7201C12.1598 23.7201 11.7598 24.0801 11.7598 24.5611C11.7598 25.0411 12.1198 25.4001 12.5998 25.4001ZM12.5998 29.2801H27.9198C28.3608 29.2801 28.7608 28.9201 28.7608 28.4391C28.7608 27.9991 28.4018 27.5991 27.9208 27.5991L12.5998 27.6001C12.1588 27.6001 11.7588 27.9601 11.7588 28.4401C11.7588 28.8801 12.1188 29.2801 12.5988 29.2801H12.5998ZM27.8798 31.4801H23.7598C23.3188 31.4801 22.9188 31.8391 22.9188 32.3201C22.9188 32.8001 23.2788 33.1601 23.7588 33.1601H27.8798C28.3198 33.1601 28.7198 32.8021 28.7198 32.3201C28.7198 31.8401 28.3598 31.4801 27.8798 31.4801Z"
          fill="#FBD501"
        />
      </svg>
      <span>
        {file.path}{" "}
        <button type="button" onClick={() => removeFile(i)}>
          x
        </button>
      </span>
    </li>
  ));
  const removeFile = (file) => {
    const newFiles = [...files]; // make a var for the new array
    acceptedFiles.splice(file, 1); // remove the file from the array
  };

  useEffect(() => {
    getServiceData();
  }, []);

  const getServiceData = () => {
    ukApiHelper("servicesV1?page=plagiarism-checker", "GET", null, null)
      .then((res) => {
        if (res.data.status) {
          const data = res.data.data;
          setServiceData(data);
          setServiceWork(data.how_it_works_section.title.title);
          setServiceSteps(data.how_it_works_section.steps);
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  const scanFile = () => {
    const formData = new FormData();
    formData.append("material", acceptedFiles[0]);
    setChecking(true);
    apiHelper("scanFile", "POST", formData, null)
      .then((res) => {
        const response = res.data;
        if (response.status) {
          getResult(response.data.scan_id);
        } else {
          setChecking(false);
          setUploadValidation(true);
          setValidationMessage(response.message);
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  const scanText = () => {
    const formData = new FormData();
    formData.append("content", textContent);
    setChecking(true);
    apiHelper("scanPlainText", "POST", formData, null)
      .then((res) => {
        const response = res.data;
        if (response.status) {
          getResult(response.data.scan_id);
        } else {
          setChecking(false);
          setUploadValidation(true);
          setValidationMessage(response.message);
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  };
  function getResult(scan_id) {
    apiHelper("scanResult?scan_id=" + scan_id, "GET", null, null)
      .then((res) => {
        const response = res.data;
        if (response.status) {
          setHasResult(true);
          let uniquePercentage =
            response.data.results.score.identicalWords / 100;
          setUniqueness(uniquePercentage);
          setSimilarity(response.data.results.score.aggregatedScore);
          setUploadMessage(response.message);
          setUploadProgress(100);
        } else {
          setUploadProgress(
            uploadProgress < 90 ? (uploadProgress += 10) : (uploadProgress += 0)
          );
          getResult(scan_id);
        }
      })
      .catch((error) => console.error(`Error: ${error}`));
  }
  const checkPlagiarism = () => {
    if (textContent.length < 1 && files.length < 1) {
      setUploadValidation(true);
      setValidationMessage(
        "You need at least a text or an uploaded file to proceed."
      );
    } else {
      if (files.length > 0) {
        scanFile();
      } else {
        scanText();
      }
    }
  };

  return (
    <>
      <Meta
        title={props.meta.title}
        description={props.meta.description}
        keywords={props.meta.keywords}
        urlCategory={props.meta.url_group}
        robotText={true}
      />
      <style dangerouslySetInnerHTML={{ __html: plagCheckerCss }}></style>
      <section className="plagiarismChecker">
        <div className="container">
          <h2 className="section-title text-center">
            Free Plagiarism Checker for Students by CheapestEssay
          </h2>
          <div className="row align-items-center">
            {!checking ? (
              <>
                <div className="col-12 col-sm-6 col-md-3 order-2 order-md-1">
                  <div className="checkerList">
                    <div className="d-flex list">
                      <svg
                        width="34"
                        height="40"
                        viewBox="0 0 34 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M32.5602 6.27999H27.1602L26.8402 1.75999C26.8402 1.55999 26.7202 1.35999 26.5612 1.19999C26.4841 1.12164 26.3896 1.06267 26.2853 1.0279C26.181 0.993141 26.0699 0.983576 25.9612 0.999992L1.40123 2.71999C0.960232 2.75999 0.601232 3.11999 0.641232 3.59999L2.80023 34.64C2.84023 35.081 3.20023 35.4 3.64023 35.4H3.68023L7.12123 35.16V38.2C7.12123 38.64 7.48123 39.04 7.96123 39.04H32.6022C33.0432 39.04 33.4432 38.681 33.4432 38.2L33.4402 7.07999C33.3592 6.63999 33.0002 6.27999 32.5592 6.27999H32.5602ZM7.12023 7.07999V33.48L4.40023 33.68L2.36023 4.27999L25.2802 2.67999L25.5202 6.23899H7.92023C7.48023 6.27899 7.12023 6.64099 7.12023 7.07899V7.07999ZM31.7202 37.36H8.76023V7.91999H31.7602V37.36H31.7202Z"
                          fill="#FBD501"
                        />
                        <path
                          d="M12.5998 13.7601H18.9598C19.3998 13.7601 19.7998 13.4001 19.7998 12.9191C19.7998 12.4781 19.4398 12.0781 18.9598 12.0781L12.5998 12.0801C12.1598 12.0801 11.7598 12.4391 11.7598 12.9201C11.7598 13.4001 12.1198 13.7601 12.5998 13.7601ZM12.5998 17.6401H27.9198C28.3608 17.6401 28.7608 17.2811 28.7608 16.8001C28.7608 16.3601 28.4018 15.9601 27.9208 15.9601H12.5998C12.1588 15.9601 11.7588 16.3191 11.7588 16.8001C11.7588 17.2801 12.1188 17.6401 12.5988 17.6401H12.5998ZM12.5998 21.5201H27.9198C28.3608 21.5201 28.7608 21.1611 28.7608 20.6801C28.7608 20.2401 28.4018 19.8401 27.9208 19.8401H12.5998C12.1588 19.8401 11.7588 20.2001 11.7588 20.6811C11.7588 21.1591 12.1188 21.5211 12.5988 21.5211L12.5998 21.5201ZM12.5998 25.4001H27.9198C28.3608 25.4001 28.7608 25.0401 28.7608 24.5601C28.7608 24.1191 28.4018 23.7191 27.9208 23.7191L12.6008 23.7201C12.1598 23.7201 11.7598 24.0801 11.7598 24.5611C11.7598 25.0411 12.1198 25.4001 12.5998 25.4001ZM12.5998 29.2801H27.9198C28.3608 29.2801 28.7608 28.9201 28.7608 28.4391C28.7608 27.9991 28.4018 27.5991 27.9208 27.5991L12.5998 27.6001C12.1588 27.6001 11.7588 27.9601 11.7588 28.4401C11.7588 28.8801 12.1188 29.2801 12.5988 29.2801H12.5998ZM27.8798 31.4801H23.7598C23.3188 31.4801 22.9188 31.8391 22.9188 32.3201C22.9188 32.8001 23.2788 33.1601 23.7588 33.1601H27.8798C28.3198 33.1601 28.7198 32.8021 28.7198 32.3201C28.7198 31.8401 28.3598 31.4801 27.8798 31.4801Z"
                          fill="#FBD501"
                        />
                      </svg>
                      <div className="detail">
                        <div className="total">1 500 000 +</div>
                        <div className="text">Checks</div>
                      </div>
                    </div>
                    <div className="d-flex list">
                      <svg
                        width="38"
                        height="38"
                        viewBox="0 0 38 38"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M23.1798 15.5161L17.5458 20.8361L14.8428 18.0551C14.7715 17.9817 14.6865 17.9232 14.5925 17.8827C14.4986 17.8422 14.3976 17.8206 14.2953 17.8192C14.0887 17.8163 13.8894 17.8956 13.7413 18.0396C13.5932 18.1836 13.5084 18.3806 13.5054 18.5871C13.5025 18.7937 13.5818 18.993 13.7258 19.1411L16.9678 22.4691C17.1127 22.6151 17.3086 22.6991 17.5142 22.7033C17.7198 22.7076 17.919 22.6319 18.0698 22.4921L24.2648 16.6491C24.3394 16.5789 24.3994 16.4946 24.4413 16.4012C24.4832 16.3077 24.5063 16.2069 24.5092 16.1045C24.5121 16.0021 24.4947 15.9002 24.4581 15.8045C24.4215 15.7089 24.3663 15.6214 24.2958 15.5471C24.1509 15.3965 23.9526 15.3088 23.7437 15.303C23.5347 15.2972 23.3319 15.3738 23.1788 15.5161H23.1798Z"
                          fill="#FBD501"
                        />
                        <path
                          d="M19.0001 7.32812C12.5621 7.32812 7.32812 12.5621 7.32812 19.0001C7.32812 25.4381 12.5621 30.6721 19.0001 30.6721C25.4371 30.6721 30.6721 25.4381 30.6721 19.0001C30.6721 12.5621 25.4371 7.32812 19.0001 7.32812ZM19.0001 29.1091C13.4221 29.1101 8.89013 24.5701 8.89013 19.0001C8.89013 13.4301 13.4221 8.89013 19.0001 8.89013C24.5781 8.89013 29.1091 13.4221 29.1091 19.0001C29.1091 24.5781 24.5781 29.1101 18.9991 29.1101L19.0001 29.1091Z"
                          fill="#FBD501"
                        />
                        <path
                          d="M35.0621 14.7031L35.3201 10.0701C35.3288 9.91797 35.2927 9.76661 35.2162 9.63474C35.1398 9.50287 35.0264 9.39628 34.8901 9.32814L30.7661 7.24214L28.6801 3.11814C28.6108 2.98279 28.5039 2.87027 28.3723 2.79402C28.2408 2.71777 28.09 2.68101 27.9381 2.68814L23.2971 2.93814L19.4301 0.383137C19.3025 0.298846 19.153 0.253906 19.0001 0.253906C18.8472 0.253906 18.6977 0.298846 18.5701 0.383137L14.7031 2.93814L10.0701 2.68014C9.91792 2.67135 9.7665 2.70741 9.63461 2.78384C9.50272 2.86027 9.39615 2.97373 9.32811 3.11014L7.24211 7.23514L3.11711 9.32014C2.9816 9.38955 2.86897 9.49655 2.79271 9.62833C2.71645 9.7601 2.67978 9.91106 2.68711 10.0631L2.94511 14.6951L0.391108 18.5631C0.307027 18.6906 0.262207 18.8399 0.262207 18.9926C0.262207 19.1453 0.307027 19.2947 0.391108 19.4221L2.93811 23.2971L2.68011 27.9301C2.67132 28.0823 2.70738 28.2337 2.78381 28.3656C2.86025 28.4975 2.9737 28.6041 3.11011 28.6721L7.23411 30.7581L9.32011 34.8831C9.46011 35.1561 9.75011 35.3281 10.0621 35.3131L14.6951 35.0551L18.5621 37.6091C18.6896 37.694 18.8389 37.7402 18.9921 37.7421C19.1453 37.7402 19.2946 37.694 19.4221 37.6091L23.2891 35.0551L27.9221 35.3121C28.0743 35.3209 28.2257 35.2849 28.3576 35.2084C28.4895 35.132 28.5961 35.0186 28.6641 34.8821L30.7501 30.7581L34.8751 28.6721C35.0105 28.6028 35.123 28.496 35.1992 28.3644C35.2755 28.2328 35.3122 28.082 35.3051 27.9301L35.0461 23.2971L37.6011 19.4301C37.6854 19.3026 37.7303 19.153 37.7303 19.0001C37.7303 18.8472 37.6854 18.6977 37.6011 18.5701L35.0621 14.7031ZM33.6091 22.6571C33.5138 22.7967 33.4697 22.9648 33.4841 23.1331L33.7261 27.5161L29.8281 29.4851C29.6794 29.5594 29.5588 29.6797 29.4841 29.8281L27.5151 33.7271L23.1331 33.4851C22.9653 33.4791 22.7994 33.5225 22.6561 33.6101L19.0001 36.0241L15.3441 33.6101C15.2171 33.5241 15.0675 33.4778 14.9141 33.4771H14.8741L10.4921 33.7191L8.52311 29.8201C8.44845 29.6717 8.32778 29.5514 8.17911 29.4771L4.27311 27.5161L4.51511 23.1331C4.52099 22.9656 4.47753 22.8001 4.39011 22.6571L1.97611 19.0001L4.39011 15.3441C4.48561 15.2043 4.52978 15.0358 4.51511 14.8671L4.27311 10.4851L8.17211 8.51514C8.32041 8.44074 8.44071 8.32044 8.51511 8.17214L10.4851 4.27414L14.8671 4.51614C15.0346 4.52202 15.2001 4.47855 15.3431 4.39114L19.0001 1.97714L22.6561 4.39114C22.7961 4.48514 22.9611 4.53114 23.1331 4.51614L27.5151 4.27414L29.4851 8.17214C29.5593 8.32081 29.6797 8.44148 29.8281 8.51614L33.7261 10.4851L33.4841 14.8671C33.4781 15.035 33.5216 15.2008 33.6091 15.3441L36.0231 19.0001L33.6091 22.6571Z"
                          fill="#FBD501"
                        />
                      </svg>
                      <div className="detail">
                        <div className="total">100%</div>
                        <div className="text">Guarantee of Quality</div>
                      </div>
                    </div>
                    <div className="d-flex list">
                      <svg
                        width="40"
                        height="40"
                        viewBox="0 0 40 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M39.52 15.6639C38.6348 11.6906 36.5582 8.082 33.5677 5.32019C30.5772 2.55837 26.8151 0.774871 22.784 0.207937C19.7906 -0.217742 16.7395 0.0435678 13.862 0.972064C10.9845 1.90056 8.3561 3.47188 6.17602 5.56694C3.14871 8.43356 1.10946 12.1871 0.352018 16.2869C0.1162 17.5105 -0.00167353 18.7539 1.79475e-05 19.9999C1.79475e-05 31.0449 8.95502 39.9999 20 39.9999C31.045 39.9999 40 31.0449 40 19.9999C40.003 18.5412 39.842 17.0867 39.52 15.6639ZM33.808 7.83994C35.236 9.46795 36.3629 11.3371 37.136 13.3599H35.728C35.1634 13.36 34.6108 13.5233 34.1368 13.83C33.6628 14.1368 33.2875 14.5739 33.056 15.0889C32.6574 15.9415 32.4737 16.8788 32.5212 17.8188C32.5686 18.7588 32.8456 19.6728 33.328 20.4809C33.7596 21.041 34.0282 21.7093 34.1042 22.4123C34.1803 23.1152 34.0608 23.8255 33.759 24.4649C33.552 24.8339 33.279 25.0899 33.088 25.0579C32.895 25.0259 32.447 24.6879 32.096 23.7449C31.103 21.1699 29.919 20.9609 28.703 20.9449C27.967 20.9449 27.488 20.9449 26.799 19.1699C26.109 17.3929 26.927 16.7389 28.158 16.0819C29.038 15.6179 30.494 14.8519 29.758 13.1699C29.6793 12.8668 29.5289 12.5872 29.3193 12.3545C29.1097 12.1218 28.8472 11.943 28.554 11.8332C28.2607 11.7233 27.9454 11.6857 27.6345 11.7234C27.3237 11.7611 27.0265 11.8731 26.768 12.0499C26.106 12.4299 25.316 12.5099 24.592 12.2729C24.161 12.1026 23.8026 11.7877 23.5782 11.3821C23.3538 10.9766 23.2774 10.5056 23.362 10.0499C23.553 8.92994 24.577 8.25694 26.097 8.25694C28.449 8.36694 30.787 7.87694 32.897 6.83394C33.169 7.15094 33.489 7.48694 33.807 7.83994H33.808ZM22.608 1.77594L23.52 1.95294C23.4575 2.53488 23.2361 3.08842 22.88 3.55294C22.5587 3.9586 22.1464 4.28295 21.6765 4.49976C21.2065 4.71656 20.6922 4.81974 20.175 4.80094C17.9859 4.51966 15.8812 3.77733 14 2.62294C15.9286 1.94833 17.9568 1.60252 20 1.59994C20.8568 1.60282 21.7124 1.66699 22.56 1.79194L22.608 1.77594ZM11.936 20.5749C12.0268 20.6663 12.1383 20.7344 12.261 20.7736C12.3837 20.8128 12.5141 20.8218 12.641 20.7999C13.3695 20.6258 14.1291 20.6294 14.8559 20.8104C15.5827 20.9914 16.2553 21.3445 16.817 21.8399C17.183 22.1059 17.561 22.3509 17.953 22.5759C18.426 22.8279 18.919 23.0399 19.425 23.2169C20.93 23.7769 21.73 24.1449 21.73 25.6169C21.5966 26.7929 21.124 27.9047 20.37 28.8169C19.1858 30.3261 18.4979 32.165 18.401 34.0809C18.426 34.4309 18.337 34.7789 18.145 35.0729C18.0729 35.1394 17.9848 35.1861 17.8893 35.2084C17.7938 35.2306 17.6941 35.2277 17.6 35.1999C16.7516 34.9651 16.0155 34.4339 15.5253 33.7028C15.0351 32.9716 14.8232 32.089 14.928 31.2149C15.0439 30.36 14.8581 29.4914 14.4027 28.7586C13.9474 28.0258 13.2509 27.4747 12.433 27.1999C11.473 26.7689 10.833 26.4799 10.833 24.6559C10.8474 24.1341 10.9558 23.6192 11.153 23.1359C11.2006 23.0275 11.2235 22.9099 11.2202 22.7916C11.2168 22.6733 11.1872 22.5572 11.1336 22.4517C11.0799 22.3461 11.0035 22.2539 10.9098 22.1814C10.8162 22.109 10.7076 22.0583 10.592 22.0329C9.63202 21.8079 8.57602 20.4329 7.55202 19.1199C7.15202 18.6079 6.75202 18.0799 6.33602 17.5999C5.14375 16.5806 3.67153 15.9448 2.11202 15.7759V15.5999C2.28402 14.8939 2.49802 14.1999 2.75202 13.5199L2.89702 13.1689C3.17702 12.4939 3.49702 11.8369 3.85602 11.1989L3.95102 11.0399C4.30902 10.4029 4.70402 9.78894 5.13602 9.19994L5.27902 8.95994C5.73102 8.36994 6.21702 7.80994 6.73602 7.27994L6.89502 7.11994C8.13702 7.81702 9.49961 8.27303 10.911 8.46394C11.903 8.46394 14.111 8.68694 14.111 10.7839C14.111 11.7279 13.341 12.2559 12.079 12.9919C11.1746 13.4244 10.4137 14.1079 9.88702 14.9609C8.81502 17.1839 10.304 18.9429 11.936 20.5749ZM20 38.3999C9.84202 38.3919 1.61002 30.1579 1.60002 19.9999C1.60802 19.1099 1.68302 18.2209 1.82302 17.3429C3.02932 17.4584 4.17813 17.9137 5.13602 18.6559C5.53602 19.1199 5.92002 19.6159 6.30502 20.1119C7.14649 21.3822 8.23471 22.4705 9.50502 23.3119C9.38322 23.7552 9.31837 24.2122 9.31202 24.6719C9.20274 25.5307 9.39724 26.4007 9.86184 27.1312C10.3264 27.8617 11.0319 28.4068 11.856 28.6719C12.816 29.1019 13.456 29.3919 13.456 31.1999C13.376 34.4799 15.633 36.7999 17.6 36.7999C17.9219 36.805 18.2409 36.7386 18.5341 36.6055C18.8272 36.4723 19.0871 36.2757 19.295 36.0299C19.742 35.4569 19.97 34.7419 19.935 34.0149C20.0459 32.4132 20.6436 30.8836 21.648 29.6309C22.565 28.4851 23.1218 27.0931 23.248 25.6309C23.248 22.9739 21.312 22.2559 19.904 21.7409C19.4755 21.5964 19.0584 21.4203 18.656 21.2139C18.314 21.0179 17.983 20.8039 17.664 20.5729C16.9952 20.0153 16.2163 19.6049 15.3783 19.3683C14.5402 19.1318 13.6617 19.0744 12.8 19.1999C11.2 17.5999 10.864 16.7039 11.344 15.7119C11.7646 15.1466 12.3198 14.6953 12.959 14.3989C14.223 13.6639 15.775 12.7989 15.775 10.8149C15.775 7.91994 13.152 6.89494 10.975 6.89494C10.0108 6.75628 9.07892 6.44713 8.22302 5.98194C9.40239 4.95904 10.7093 4.09317 12.111 3.40594C13.616 4.30094 17.359 6.33394 20.111 6.33394C21.2809 6.38073 22.4275 5.99832 23.3351 5.25868C24.2427 4.51904 24.8487 3.47318 25.039 2.31794C27.4014 2.98687 29.6051 4.12408 31.519 5.66194C29.778 6.38894 27.899 6.72194 26.014 6.63894C25.0357 6.52285 24.0495 6.77941 23.2517 7.35756C22.454 7.93571 21.9032 8.79305 21.709 9.75894C21.5528 10.5891 21.6974 11.4477 22.1171 12.1808C22.5368 12.9139 23.204 13.4734 23.999 13.7589C25.099 14.1279 26.301 14.0289 27.326 13.4869C27.5109 13.4001 27.7034 13.3305 27.901 13.2789C27.901 13.2789 28.029 13.2789 28.237 13.8069C28.445 14.3349 28.381 14.1119 27.373 14.6389C26.111 15.3119 24 16.4309 25.279 19.7279C26.271 22.3039 27.456 22.5119 28.672 22.5279C29.407 22.5279 29.887 22.5279 30.576 24.3029C31.266 26.0789 32.272 26.5919 32.961 26.6389H33.089C33.5375 26.6179 33.9715 26.4739 34.3437 26.2228C34.7158 25.9716 35.0117 25.623 35.199 25.2149C35.6525 24.3113 35.8433 23.2986 35.75 22.2919C35.6567 21.2852 35.2829 20.3248 34.671 19.5199C34.3629 18.954 34.1897 18.3246 34.1649 17.6807C34.1401 17.0368 34.2643 16.3959 34.528 15.8079C34.6234 15.5554 34.7943 15.3384 35.0174 15.1865C35.2406 15.0345 35.5051 14.9551 35.775 14.9589H37.711C37.806 15.3109 37.935 15.6469 38.015 16.0149C38.292 17.3249 38.421 18.6609 38.4 19.9999C38.392 30.1579 30.158 38.3919 20 38.3999Z"
                          fill="#FBD501"
                        />
                      </svg>
                      <div className="detail">
                        <div className="total">150+</div>
                        <div className="text">Languages Supported</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 order-1 order-md-2">
                  <div className="checkerTypes bg-white">
                    <div className="essayType type">
                      <div className="enterText">
                        <textarea
                          rows="5"
                          className="form-control"
                          placeholder="Paste your text here"
                          disabled={files.length > 0}
                          value={textContent}
                          onChange={contentChangeHandler}
                        />
                        <div
                          className="dropzoneInput"
                          {...getRootProps()}
                          style={
                            files.length > 0
                              ? { border: "1px dashed #FBD501" }
                              : { border: "1px dashed #96AABE" }
                          }
                        >
                          <input
                            required
                            disabled={
                              files.length > 0 || textContent.length > 0
                            }
                            {...getInputProps()}
                          />
                          {files.length > 0 ? (
                            files
                          ) : (
                            <>
                              <label>
                                Drag and Drop here, or{" "}
                                <strong>Browse your files</strong>
                                <br />
                                .pdf, .doc, .docx, .txt, .rtf, .odt
                              </label>
                            </>
                          )}
                        </div>
                      </div>
                      <label
                        className="uploadValidator danger"
                        style={{
                          display: uploadHasError
                            ? "display: block:"
                            : "display: none",
                        }}
                      >
                        {validationMessage}
                      </label>
                      <a
                        className="btn theme-btn w-100"
                        onClick={checkPlagiarism}
                      >
                        Check for Plagiarism
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-md-3 ps-xl-5 order-3">
                  <ul className="box-list">
                    <li>Completely free</li>
                    <li>Improved algorithms</li>
                    <li>Comprehensive report</li>
                    <li>Check on real-time</li>
                    <li>Simple for using</li>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div className="col-md-8">
                  <div className="bg-white card-body checkBoxWrap">
                    <div className="contentWrap desc w-100 mb-0">
                      {!hasResult ? (
                        <div className="checkBox">
                          <div className="checkingImg">
                            <div className="image">
                              <svg
                                width="50"
                                height="50"
                                viewBox="0 0 50 50"
                                fill="none"
                              >
                                <path
                                  d="M47.6083 14.5469L44.9499 15.778C46.3569 18.8162 47.0704 21.919 47.0704 25.0002C47.0704 37.1698 37.1697 47.0705 25 47.0705C20.5595 47.0705 16.2791 45.7033 12.5442 43.1061C13.1229 41.5446 12.7873 39.7182 11.5346 38.4655C9.82124 36.7521 7.03315 36.7522 5.31978 38.4655C3.6063 40.1789 3.6063 42.9669 5.31978 44.6804C6.76089 46.1216 8.96821 46.3539 10.6565 45.3605C14.9339 48.3994 19.8687 50.0002 25 50.0002C38.7656 50.0002 50 38.7649 50 25.0002C50 21.4907 49.1954 17.9737 47.6083 14.5469ZM9.46304 42.6089C8.89185 43.1801 7.96274 43.1802 7.39136 42.6089C6.82017 42.0377 6.82017 41.1084 7.39136 40.5373C7.96235 39.9662 8.89175 39.966 9.46304 40.5373C10.0342 41.1083 10.0342 42.0377 9.46304 42.6089Z"
                                  fill="#fff"
                                />
                                <path
                                  d="M32.3242 19.1406V14.7461H35.2539V11.8164H14.7461V14.7461H17.6758V19.1406C17.6758 21.534 18.8299 23.6626 20.6105 25C18.8299 26.3374 17.6758 28.466 17.6758 30.8594V35.2539H14.7461V38.1836H35.2539V35.2539H32.3242V30.8594C32.3242 28.466 31.1701 26.3374 29.3895 25C31.1701 23.6626 32.3242 21.534 32.3242 19.1406ZM29.3945 30.8594V35.2539H20.6055V30.8594C20.6055 28.4362 22.5769 26.4648 25 26.4648C27.4231 26.4648 29.3945 28.4362 29.3945 30.8594ZM29.3945 19.1406C29.3945 21.5638 27.4231 23.5352 25 23.5352C22.5769 23.5352 20.6055 21.5638 20.6055 19.1406V14.7461H29.3945V19.1406Z"
                                  fill="#fff"
                                />
                                <path
                                  d="M38.4654 11.5347C40.1787 13.2479 42.9668 13.248 44.6803 11.5347C46.3937 9.82129 46.3937 7.0332 44.6803 5.31982C43.2358 3.87539 41.0277 3.64863 39.3436 4.63965C35.0661 1.60078 30.1313 0 25 0C11.2345 0 0 11.2353 0 25C0 28.5095 0.804688 32.0265 2.3917 35.4533L5.0502 34.2222C3.64316 31.184 2.92969 28.0812 2.92969 25C2.92969 12.8304 12.8304 2.92969 25 2.92969C29.4405 2.92969 33.721 4.29688 37.4559 6.89414C36.8771 8.45557 37.2128 10.282 38.4654 11.5347ZM40.537 7.39141C41.1082 6.82031 42.0374 6.82022 42.6087 7.39141C43.1799 7.9626 43.1799 8.89189 42.6087 9.46299C42.0375 10.0342 41.1082 10.0343 40.537 9.46299C39.9658 8.89189 39.9658 7.9625 40.537 7.39141Z"
                                  fill="#fff"
                                />
                              </svg>
                            </div>
                            <span>checking....</span>
                          </div>
                        </div>
                      ) : null}
                      {files.length > 0 ? files : textContent}
                    </div>
                  </div>
                </div>
                {!hasResult ? (
                  <div className="col-md-4">
                    <div className="bg-white writerBox">
                      <div className="desc text-center">
                        Analyzing your content Preparing your result, please be
                        patient.
                      </div>
                      <Progress value={uploadProgress} />
                      <div className="d-md-flex">
                        <div className="content">
                          <span>600+</span>
                          <span>writers</span>
                        </div>
                        <div className="desc mb-0">
                          This is the number of experts in our proficient team
                          who are available 24X7 to give you a helping hand with
                          your academic papers
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="col-md-4">
                    <div className="bg-white card-body msgDetail">
                      <div className="details d-flex justify-content-around">
                        <div className="text text-center">
                          <span>Similar</span>
                          <span
                            className={similarity > 8 ? "danger" : "success"}
                          >
                            {similarity}%
                          </span>
                        </div>
                        <div className="text text-center">
                          <span>Unique</span>
                          <span
                            className={uniqueness < 8 ? "success" : "danger"}
                          >
                            {uniqueness}%
                          </span>
                        </div>
                      </div>
                      <div className="msg success">{uploadMessage}.</div>
                      <div className="desc mb-3 mt-3 w-100 text-center bg-transparent p-0">
                        Need professional assistance with your essay writing?
                        Our expert writers are the perfect solution for you. Get
                        a well-written essay today!
                      </div>
                      <div className="text-center">
                        <a href="/order" className="btn theme-btn">
                          Place your order!
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </section>
      <section className="pb-0">
        <div className="container">
          <h2 className="section-title text-center">
            {serviceWork && parse(serviceWork)}
          </h2>
          <div className="row">
            {serviceSteps &&
              serviceSteps.map(function (name, index) {
                return (
                  <div className="col-md-6" key={index}>
                    <div className="box d-flex">
                      <div className="number">{name.id}</div>
                      <div className="detail">
                        <div className="works">
                          {name.content_header && parse(name.content_header)}
                        </div>
                        <div className="desc w-100">
                          {name.content && parse(name.content)}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            <div className="col-md-12">
              <div className="desc w-100">
                So, it is that simple to use our free online plagiarism checker
                for students. However, to get a trustworthy result, you need to
                be extremely careful. There are varied online plagiarism
                software that can be used to check the authenticity of the
                content. But all might not be genuine. You can be sure of us
                when it comes to selecting the top online plagiarism checker for
                students for free. As our plagiarism checker is designed for
                both students and professors, we assure you of outstanding
                service
              </div>
              <div className="desc w-100 mb-0">
                Our software is powered with advanced AI and Machine Learning
                technology that detects different similarity types including
                identical, similar and paraphrased text.Nothing is left out.
                Crosscheck documents against each other, billions and trillions
                of online sources, licensed private databases, with academic
                journals and archives that are not public on the internet, and
                with previously submitted content on our Plagiarism chekcher
                (does not provide the original submitter’s content).
              </div>
            </div>
          </div>
        </div>
      </section>
      <HireWriter
        title="Choose professional writers matching your academic needs"
        desc="At CheapestEssay, we assign a suitable article writer to facilitate your writing requirements.These writers have gained positive reviews and ratings based on their previous work. Thus, you can read up about the writer before hiring them for your work."
        topWriters={props.writers && props.writers}
      />
      <section className="howTo">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-3">
              <h2 className="section-title mb-0">
                How to Evade from Plagiarism?
              </h2>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="box ps-xl-2 pe-xl-2">
                <div className="innerTitle">Include Quotations</div>
                <div className="desc w-100 mb-4">
                  One of the simplest ways to hold off your content from
                  plagiarism when including a source's text in your writing is
                  by using quotation marks. This tells the readers that the
                  words aren't yours and are taken from somewhere else
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="box ps-xl-2 pe-xl-2">
                <div className="innerTitle">Cite the Sources</div>
                <div className="desc w-100 mb-4">
                  When implying an idea that's not your own, try including a
                  citation in your content. The citation style specifies the
                  source's full name, publishing date, and any other vital
                  citation element needed by the style guide you refer to
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="box ps-xl-2 pe-xl-2">
                <div className="innerTitle">Use Plagiarism Checker</div>
                <div className="desc w-100 mb-4">
                  While researching any particular topic, you might come across
                  some impressive information you would include in your writing
                  without citation. Using our assignment plagiarism checker can
                  assist you in identifying the issues before final submission
                  if you worry about duplication
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Content serviceData={serviceData} />
      <section className="helpDetail pt-0">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-4">
              <div className="box bg-white text-center">
                <Img
                  src="/cheapestEssayPlagirism.webp"
                  alt="CheapestEssay"
                  title="CheapestEssay"
                  width="80"
                  height="80"
                />
                <div className="brandName">
                  Cheapest<span>Essay</span>
                </div>
                <div className="desc w-100 mb-0">
                  CheapestEssay is awell-known provider of all types of academic
                  papers.
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="box bg-white">
                <ul className="list">
                  <li>Stuck with a lot of homework assignments?</li>
                  <li>Worried about making your work 100% plagiarism free?</li>
                  <li>Looking for a writing help with affordable price?</li>
                </ul>
                <div className="text-center">
                  <a href="#" className="btn secondary-btn text-uppercase">
                    let us help you!
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-md-4">
              <div className="box bg-white provideList d-flex flex-wrap align-items-center">
                <div className="title">We provide</div>
                <ul className="list ps-md-5">
                  <li>
                    <a href="">Essay Writing</a>
                  </li>
                  <li>
                    <a href="">Research Paper</a>
                  </li>
                  <li>
                    <a href="">Case Study</a>
                  </li>
                  <li>
                    <a href="">Course Work</a>
                  </li>
                  <li>
                    <a href="">Assignment</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Faq faqData={serviceData && serviceData} />
      <Contact />
    </>
  );
};
export async function getStaticProps(context) {
  const DEFAULT_META = process.env.defaultMeta;
  const res = await ukApiHelper(
    `seoV1?page=free-plagiarism-checker&is_live=${process.env.isApiLive}`,
    "GET",
    null,
    null
  );
  const meta = res.data.status ? res.data.data : DEFAULT_META;

  const resWriters = await ukApiHelper(`top10WritersV1?limit=5`, 'GET', null, null)
  const writers = resWriters.data.status ? resWriters.data.data : null;

  return {
    props: {
      meta,
      writers
    },
  };
}

export default PlagiarismChecker;
