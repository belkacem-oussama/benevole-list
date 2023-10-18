import SyncLoader from "react-spinners/SyncLoader"

export default function Loader({ color, loading, size }) {
  return (
    <div className="loader">
      <SyncLoader
        color={color}
        loading={loading}
        size={size}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
