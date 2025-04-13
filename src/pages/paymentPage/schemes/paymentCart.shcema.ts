import { z } from "zod";

export const cardSchema = z.object({
  cardName: z
    .string()
    .min(1, "Поле обязательно")
    .min(2, "Имя должно содержать минимум 2 символа")
    .max(50, "Имя слишком длинное")
    .regex(/^[A-Z\s]+$/, "Имя должно содержать только заглавные буквы"),

  cardNumber: z
    .string()
    .min(1, "Поле обязательно")
    .min(16, "Номер карты должен содержать 16 цифр")
    .max(19, "Номер карты слишком длинный")
    .regex(/^[\d\s]+$/, "Номер карты должен содержать только цифры")
    .transform((val) => val.replace(/\s/g, "")),

  expiryDate: z
    .string()
    .min(1, "Поле обязательно")
    .regex(/^\d{2}\s?\/\s?\d{2}$/, "Неверный формат даты (MM/YY)")
    .refine((val) => {
      const [month, year] = val.split("/").map(Number);
      if (month < 1 || month > 12) return false;

      const currentYear = new Date().getFullYear() % 100;
      const currentMonth = new Date().getMonth() + 1;

      if (year < currentYear) return false;
      if (year === currentYear && month < currentMonth) return false;

      return true;
    }, "Срок действия карты истек или неверен"),

  cvv: z
    .string()
    .min(1, "Поле обязательно")
    .min(3, "CVV должен содержать 3 цифры")
    .max(4, "CVV должен содержать 3 или 4 цифры")
    .regex(/^\d+$/, "CVV должен содержать только цифры"),
});

export type CardFormData = z.infer<typeof cardSchema>;
