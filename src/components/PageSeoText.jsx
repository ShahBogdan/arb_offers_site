export default function ({ text }) {
  return (
    <div
      className="mt-5 text-gray-600 p-4 border border-gray-100 rounded-md bg-white"
      dangerouslySetInnerHTML={{ __html: text ? text : "" }}
    />
  );
}
