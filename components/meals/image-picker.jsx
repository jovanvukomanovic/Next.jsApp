"use client";

import { useRef } from "react";
import styles from "./image-picker.module.css";
import { useState } from "react";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const imageInput = useRef(null);
  const [imagePreview, setImagePreview] = useState();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(e) {
    const file = e.target.files[0];

    // console.log(file);

    if (!file) {
      setImagePreview(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setImagePreview(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!imagePreview && <p>No image picked yet</p>}
          {imagePreview && (
            <Image
              src={imagePreview}
              alt={"The image selected by the user"}
              fill
              name={name}
            />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          required
          accept="image/png, image/jpeg"
          ref={imageInput}
          onChange={handleImageChange}
        />
        <button
          className={styles.button}
          type="button"
          onClick={handlePickClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
