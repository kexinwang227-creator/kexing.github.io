import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "值班问题与处理方案库",
  description: "用于匿名整理值班经验的本地工具",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}

