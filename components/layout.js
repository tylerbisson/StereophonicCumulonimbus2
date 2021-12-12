/** @jsxImportSource theme-ui */

export default function Layout({ children }) {
  return (
    <div sx={{
      width: [null, null, '100%'],
      fontFamily: 'body'
    }}>
      {children}
    </div>
  );
};