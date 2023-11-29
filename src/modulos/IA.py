import cv2
import numpy as np

# Cargar las imágenes
imagen_1 = cv2.imread("D:\MODULAR\cucervices\src\images\IA\img1(F).jpeg")
imagen_2 = cv2.imread("D:\MODULAR\cucervices\src\images\IA\img2(F).jpeg")

imagen_1_gris = cv2.cvtColor(imagen_1, cv2.COLOR_BGR2GRAY)
imagen_2_gris = cv2.cvtColor(imagen_2, cv2.COLOR_BGR2GRAY)

# Crear un reconocedor LBPH
lbph_recognizer = cv2.face.LBPHFaceRecognizer_create()

# Entrenar el reconocedor con una imagen y etiqueta
etiqueta = 0
lbph_recognizer.train([imagen_1_gris], np.array([etiqueta]))

# Predecir la etiqueta y la confianza para la segunda imagen
label, conf = lbph_recognizer.predict(imagen_2_gris)

# Imprimir la etiqueta y la confianza
print(f"Etiqueta: {label}, Confianza: {conf}")

# Establecer un umbral de confianza (ajusta según sea necesario)
umbral_confianza = 50

# Comparar la confianza con el umbral
if conf < umbral_confianza:
    print("Las imagenes son de la misma persona")
else:
    print("Las imagenes no son de la misma persona")
