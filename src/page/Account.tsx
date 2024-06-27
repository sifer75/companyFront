import { updateCompany } from "@/lib/company.request";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Account() {
  const queryClient = useQueryClient();
  const [name, setName] = useState<string>("");
  const [image, setImage] = useState<File | undefined>();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (data: { name: string; image: File | undefined }) =>
      updateCompany(data),
    onError: (error) => {
      console.log(error);
    },
    onSuccess: async () => {
      try {
        queryClient.invalidateQueries({ queryKey: ["company"] });
        navigate("/dashboard");
      } catch (e) {
        console.error("Erreur lors de la modification de la company");
      }
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("image/")) {
        setImage(file);
      } else {
        alert("Veuillez télécharger un fichier jpeg ou pnj.");
      }
    }
  };

  return (
    <div className="w-full h-full">
      <input
        placeholder="Name"
        defaultValue={name}
        onChange={(e) => handleChange(e)}
      ></input>
      <input
        type="file"
        accept="image/jpeg, image/png"
        onChange={(e) => handleUploadImage(e)}
      ></input>
      <button
        className="bg-red-500"
        onClick={() => {mutation.mutate({ name: name, image: image })}}
      >
        valider
      </button>
    </div>
  );
}

export default Account;
