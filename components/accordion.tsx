"use client";
import { Collapse, CollapseProps, theme } from "antd";
import type { CSSProperties } from "react";

interface AccordionProps {
  key: string;
  label: string;
  children: string;
}

const getItems = (panelStyle: CSSProperties, data: AccordionProps[]): CollapseProps['items'] =>
  data.map((item) => ({
    key: item.key,
    label: <p className="text-black font-bold text-base lg:text-lg xl:text-xl 2xl:text-2xl text-justify">{item.label}</p>,
    children: <p className="text-sm lg:text-base xl:text-lg 2xl:text-xl text-justify text-black">{item.children}</p>,
    style: panelStyle,
  }));

const ChevronIcon = ({ rotate }: { rotate?: boolean }) => {
  return (
    <svg
      width="39"
      height="26"
      viewBox="0 0 39 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`transform transition-transform duration-300 w-[20px] aspect-square ${!rotate ? 'rotate-180' : 'rotate-0'
        }`}
    >
      <path d="M4.61083 0.650391L19.1056 15.9171L33.6003 0.650391L38.0529 5.35039L19.1056 25.3504L0.158203 5.35039L4.61083 0.650391Z" fill="#292929" />
    </svg>
  );
};

export default function Accordion({ data }: { data: AccordionProps[] }) {
  const { token } = theme.useToken();

  const panelStyle: CSSProperties = {
    marginBottom: 18,
    background: "#D2D1D1",
    borderRadius: 16,
    border: 'none',
    padding: '6px 16px',
  };

  return (
    <Collapse
      accordion
      bordered={false}
      expandIconPosition="end"
      expandIcon={({ isActive }) => <ChevronIcon rotate={isActive} />}
      style={{ background: token.colorBgContainer }}
      items={getItems(panelStyle, data)}
    />
  );
}
