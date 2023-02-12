const EditorsNote = ({ note }) => {
  return (
    <p className="text-lg text-gray-500">
      <em>
        <strong>Editor’s note: </strong>
        {note}
      </em>
    </p>
  );
};

export default EditorsNote;
