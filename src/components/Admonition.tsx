import React from 'react';
import {
  RiAlertFill,
  RiBug2Fill,
  RiDoubleQuotesR,
  RiFileList2Fill,
  RiFireFill,
  RiInformationFill,
  RiLightbulbFlashFill,
  RiListOrdered,
  RiQuestionnaireFill,
  RiStickyNoteFill,
} from 'react-icons/ri';
import Container from './Container';

interface AdmonitionProps {
  type?: string;
  title?: string;
  children: React.ReactNode;
}

const Admonition = ({ type, title, children }: AdmonitionProps) => {
  return (
    <Container>
      <div className="mx-auto my-4">
        {(() => {
          switch (type) {
            case 'note':
              return <Note title={title ? title : type}>{children}</Note>;
            case 'warning':
              return <Warning title={title ? title : type}>{children}</Warning>;
            case 'summary':
              return <Summary title={title ? title : type}>{children}</Summary>;
            case 'info':
              return <Info title={title ? title : type}>{children}</Info>;
            case 'tip':
              return <Tip title={title ? title : type}>{children}</Tip>;
            case 'question':
              return <Question title={title ? title : type}>{children}</Question>;
            case 'danger':
              return <Danger title={title ? title : type}>{children}</Danger>;
            case 'bug':
              return <Bug title={title ? title : type}>{children}</Bug>;
            case 'example':
              return <Example title={title ? title : type}>{children}</Example>;
            case 'quote':
              return <Quote title={title ? title : type}>{children}</Quote>;
            default:
              return <Note title={title ? title : type}>{children}</Note>;
          }
        })()}
      </div>
    </Container>
  );
};
const Warning = (props: AdmonitionProps) => {
  return (
    <div className="p-4 border rounded-sm bg-warning-50">
      <div className="flex items-center justify-start mb-4">
        <span className="sr-only">{props.type}</span>
        <RiAlertFill className="text-warning-500" />
        <span className="w-64 ml-2 font-bold leading-tight tracking-wide uppercase text-warning-800 md:w-full">
          {props.title ? props.title : props.type}
        </span>
      </div>
      <div className="text-base font-normal prose-p:mt-0 prose-p:mb-2 text-warning-800">
        {props.children}
      </div>
    </div>
  );
};
const Note = (props: AdmonitionProps) => {
  return (
    <div className="p-4 border rounded-sm bg-blue-50">
      <div className="flex items-center justify-start mb-4">
        <span className="sr-only">{props.type}</span>
        <RiStickyNoteFill className="text-blue-500" />
        <span className="w-64 ml-2 font-bold leading-tight tracking-wide text-blue-800 uppercase md:w-full">
          {props.title ? props.title : props.type}
        </span>
      </div>
      <div className="text-base font-normal text-blue-700 prose-p:mt-0 prose-p:mb-2">
        {props.children}
      </div>
    </div>
  );
};
const Summary = (props: AdmonitionProps) => {
  return (
    <div className="p-4 border rounded-sm bg-secondary-50">
      <div className="flex items-center justify-start mb-4">
        <span className="sr-only">{props.type}</span>
        <RiFileList2Fill className="text-secondary-500" />
        <span className="w-64 ml-2 font-bold leading-tight tracking-wide uppercase text-secondary-800 md:w-full">
          {props.title ? props.title : props.type}
        </span>
      </div>
      <div className="text-base font-normal prose-p:mt-0 prose-p:mb-2 text-secondary-700">
        {props.children}
      </div>
    </div>
  );
};
const Info = (props: AdmonitionProps) => {
  return (
    <div className="p-4 border rounded-sm bg-blue-50">
      <div className="flex flex-row items-center justify-between mb-4">
        <span className="sr-only">{props.type}</span>
        <RiInformationFill className="text-blue-500" />
        <span className="w-64 ml-2 font-bold leading-tight tracking-wide text-blue-800 uppercase md:w-full">
          {props.title ? props.title : props.type}
        </span>
      </div>
      <div className="text-base font-normal text-blue-700 prose-p:mt-0 prose-p:mb-2">
        {props.children}
      </div>
    </div>
  );
};
const Tip = (props: AdmonitionProps) => {
  return (
    <div className="p-4 border rounded-sm bg-teal-50">
      <div className="flex items-center justify-start mb-4">
        <span className="sr-only">{props.type}</span>
        <RiLightbulbFlashFill className="text-teal-500" />
        <span className="w-64 ml-2 font-bold leading-tight tracking-wide text-teal-800 uppercase md:w-full">
          {props.title ? props.title : props.type}
        </span>
      </div>
      <div className="text-base font-normal text-teal-700 prose-p:mt-0 prose-p:mb-2">
        {props.children}
      </div>
    </div>
  );
};
const Question = (props: AdmonitionProps) => {
  return (
    <div className="p-4 border rounded-sm bg-teal-50">
      <div className="flex items-center justify-start mb-4">
        <span className="sr-only">{props.type}</span>
        <RiQuestionnaireFill className="text-teal-500" />
        <span className="w-64 ml-2 font-bold leading-tight tracking-wide text-teal-800 uppercase md:w-full">
          {props.title ? props.title : props.type}
        </span>
      </div>
      <div className="text-base font-normal text-teal-700 prose-p:mt-0 prose-p:mb-2">
        {props.children}
      </div>
    </div>
  );
};
const Danger = (props: AdmonitionProps) => {
  return (
    <div className="p-4 border rounded-sm bg-error-50">
      <div className="flex items-center justify-start mb-4">
        <span className="sr-only">{props.type}</span>
        <RiFireFill className="text-error-500" />
        <span className="w-64 ml-2 font-bold leading-tight tracking-wide uppercase md:w-full text-error-800">
          {props.title ? props.title : props.type}
        </span>
      </div>
      <div className="text-base font-normal prose-p:mt-0 prose-p:mb-2 text-error-700">
        {props.children}
      </div>
    </div>
  );
};
const Bug = (props: AdmonitionProps) => {
  return (
    <div className="p-4 border rounded-sm bg-rose-50">
      <div className="flex items-center justify-start mb-4">
        <span className="sr-only">{props.type}</span>
        <RiBug2Fill className="text-rose-500" />
        <span className="w-64 ml-2 font-bold leading-tight tracking-wide uppercase md:w-full text-rose-800">
          {props.title ? props.title : props.type}
        </span>
      </div>
      <div className="text-base font-normal prose-p:mt-0 prose-p:mb-2 text-rose-700">
        {props.children}
      </div>
    </div>
  );
};
const Example = (props: AdmonitionProps) => {
  return (
    <div className="p-4 border rounded-sm bg-secondary-50">
      <div className="flex items-center justify-start mb-4">
        <span className="sr-only">{props.type}</span>
        <RiListOrdered className="text-secondary-500" />
        <span className="w-64 ml-2 font-bold leading-tight tracking-wide uppercase md:w-full text-secondary-800">
          {props.title ? props.title : props.type}
        </span>
      </div>
      <div className="text-base font-normal prose-p:mt-0 prose-p:mb-2 text-secondary-700">
        {props.children}
      </div>
    </div>
  );
};
const Quote = (props: AdmonitionProps) => {
  return (
    <div className="p-4 border rounded-sm bg-gray-50">
      <div className="flex items-center justify-start mb-4">
        <span className="sr-only">{props.type}</span>
        <RiDoubleQuotesR className="text-gray-500" />
        <span className="w-64 ml-2 font-bold leading-tight tracking-wide text-gray-800 uppercase md:w-full">
          {props.title ? props.title : props.type}
        </span>
      </div>
      <div className="text-base font-normal text-gray-700 prose-p:mt-0 prose-p:mb-2">
        {props.children}
      </div>
    </div>
  );
};
export default Admonition;
