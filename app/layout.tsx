import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const hanYongUn = localFont({
    src: './fonts/독립서체_한용운_GS.otf',
    display: 'swap',
    variable: '--font-han-yong-un',
});

const canela = localFont({
    src: './fonts/CanelaText-Regular-Trial.otf',
    display: 'swap',
    variable: '--font-canela',
});

export const metadata: Metadata = {
    title: 'Women on the line',
    description: '선 위의 여성들',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className={`${hanYongUn.variable} ${canela.variable}`}>{children}</body>
        </html>
    );
}
