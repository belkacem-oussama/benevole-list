import SyncLoader from "react-spinners/SyncLoader"

export default function Loader({ color, loading, size }) {
  return (
    <>
      <SyncLoader
        color={color}
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </>
  )
}
