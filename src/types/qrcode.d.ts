declare module 'qrcode.react' {
  export interface QRCodeProps {
    value: string;
    size: number;
    fgColor: string;
    bgColor: string;
  }

  export class QRCode extends React.Component<QRCodeProps> {}
}
