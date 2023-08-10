import React, { useState } from "react";
import { CarbonConnect } from "carbon-connect";
import axios from "axios";
import { useParams } from "react-router-dom";
const Carbon = () => {
  const params = useParams();
  const [results, setResults] = useState({ hello: "ss" });
  const BASE_DEV = "https://ask-dev.myaskai.com/";
  const BASE_PROD = "https://ask.myaskai.com/";
  const tokenFetcher = async () => {
    const response = await axios.get(`${BASE_DEV}auth/fetch-carbon-token`, {
      params: { customer_id: params.id }, //customer_id from URL param
      headers: {
        Authorization:
          "01mIAG9Vjw91LDYC0sQ3HtDR3rQNiy3YRAE2xXHhRj8CQABJ8HEpqCvG4IQN0SjZtKFf67fl9qBchUeJDRukfhYxvDFmflSHvYG",
      },
    });

    const data = await response.json();
    // Just return the response data which contains the access_token.
    return data.access_token;
  };

  return (
    <>
      <CarbonConnect
        orgName="My AskAI"
        brandIcon="https://7ac07acbae116a5155080d295197d8d6.cdn.bubble.io/f1689768781903x860453087150673900/Logo.png"
        tokenFetcher={tokenFetcher}
        tags={{
          askai_id: "askai_id",
        }}
        maxFileSize={10000000}
        enabledIntegrations={[
          {
            id: "DROPBOX",
            chunkSize: 1000,
            overlapSize: 35,
          },
          {
            id: "NOTION",
            chunkSize: 150,
            overlapSize: 15,
          },

          {
            id: "GOOGLE_DOCS",
            chunkSize: 1000,
            overlapSize: 35,
          },
        ]}
        entryPoint="GOOGLE_DOCS"
        onSuccess={(data) => setResults(data)}
        onError={(error) => console.log("Data on Error: ", error)}
        primaryBackgroundColor="#FBFBFB"
        primaryTextColor="#BD477E"
        secondaryBackgroundColor="#FFFFFF"
        secondaryTextColor="#1F3261"
        allowMultipleFiles={false}
        open={true}
        chunkSize={1500}
        overlapSize={20}
        tosURL="https://myaskai.com/terms"
        privacyPolicyURL="https://myaskai.com/privacy"
        // entryPoint="LOCAL_FILES"
      ></CarbonConnect>
      {results && (
        <div className="flex flex-col w-full absolute items-center h-full top-[50rem] mt-2">
          {results?.data_source_external_id && (
            <div className="flex ">
              <div>data_source_external_id: </div>
              <div className="ml-2">`{results?.data_source_external_id}`</div>
            </div>
          )}
          {results?.sync_status && (
            <div className="flex ">
              <div>sync_status: </div>
              <div className="ml-2">`{results?.sync_status}`</div>
            </div>
          )}
          {results?.objects && (
            <div className="flex ">
              <div>objects: </div>
              <div className="ml-2">`{results?.objects}`</div>
            </div>
          )}
          {results?.tags && (
            <div className="flex ">
              <div>tags: </div>
              <div className="ml-2">`{results?.tags}`</div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Carbon;