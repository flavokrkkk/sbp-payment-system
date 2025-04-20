import {
  Button,
  ButtonColors,
  ButtonRoundSizes,
  ButtonTypes,
} from "@/shared/ui/button/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/shared/ui/input/input";
import CastomLabel from "@/widgets/castomLabel";
import InputMask from "react-input-mask";
import clsx from "clsx";
import { useForm } from "react-hook-form";
import {
  CardFormData,
  cardSchema,
} from "@/pages/paymentPage/schemes/paymentCart.shcema";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/shared/ui/form/form";
import { usePaymentByCard } from "../hooks/usePaymentByCard";
import { useAppSelector } from "@/shared";
import { paymentSelectors } from "@/entities/payment";
import { useState } from "react";
import { Loader2 } from "lucide-react";

const PaymentCartForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const orderId = useAppSelector(paymentSelectors.orderId);
  const form = useForm<CardFormData>({
    resolver: zodResolver(cardSchema),
    defaultValues: {
      cardName: "",
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    },
  });

  const {
    control,
    formState: { errors },
    reset,
    setError: setValidateError,
    handleSubmit,
  } = form;

  const { setError, handleEncryptedPayData, handlePaymentCard } =
    usePaymentByCard({ setValidateError });

  const onFormSubmit = async (values: CardFormData) => {
    setIsLoading(true);
    try {
      const {
        deviceData,
        encryptedData,
        browserAcceptHeader,
        clientIp,
        userAgent,
      } = await handleEncryptedPayData(values);

      if (!deviceData || !encryptedData || !orderId || !clientIp) {
        return;
      }
      const paymentData = await handlePaymentCard({
        orderId,
        browserAcceptHeader,
        clientIp,
        deviceData: deviceData as Record<string, string>,
        encryptedData,
        userAgent,
      });
      reset();
      return paymentData;
    } catch (e) {
      console.error("Ошибка при обработке платежа:", e);
      setError("Произошла ошибка. Попробуйте снова.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        className={clsx(
          "rounded-3xl w-full flex justify-center items-center flex-col space-y-3 md:space-y-6"
        )}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <section
          className="md:border-2 border-dashed border-[#CFDBFB]  py-4 md:py-5 md:p-5 flex flex-col space-y-5"
          style={{
            position: "relative",
            borderRadius: "30px",
            backgroundClip: "padding-box",
          }}
        >
          <FormField
            control={control}
            disabled={isLoading}
            name="cardName"
            render={({ field }) => {
              const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
                const value = e.target.value.toUpperCase();
                field.onChange(value);
              };

              const handleKeyDown = (
                e: React.KeyboardEvent<HTMLInputElement>
              ) => {
                if (/[а-яА-ЯЁё]/.test(e.key)) {
                  e.preventDefault();
                }
              };

              const handlePaste = (
                e: React.ClipboardEvent<HTMLInputElement>
              ) => {
                const pastedText = e.clipboardData.getData("text");
                if (/[а-яА-ЯЁё]/.test(pastedText)) {
                  e.preventDefault();
                }
              };

              return (
                <FormItem className="w-full space-y-1">
                  <CastomLabel label="Имя на карте" error={!!errors.cardName} />
                  <FormControl>
                    <Input
                      placeholder="IVAN IVANOV"
                      className={clsx(
                        "h-11 uppercase",
                        errors.cardName && "border border-red-600"
                      )}
                      value={field.value}
                      onBlur={field.onBlur}
                      name={field.name}
                      ref={field.ref}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      onPaste={handlePaste}
                    />
                  </FormControl>
                  <FormMessage className="text-xs font-light" />
                </FormItem>
              );
            }}
          />

          <FormField
            disabled={isLoading}
            control={control}
            name="cardNumber"
            render={({ field }) => (
              <FormItem className="w-full space-y-1">
                <CastomLabel label="Номер карты" error={!!errors.cardNumber} />
                <FormControl>
                  <InputMask
                    mask="9999 9999 9999 9999"
                    value={field.value}
                    onChange={field.onChange}
                    onBlur={field.onBlur}
                    disabled={field.disabled}
                    placeholder="1234 4567 8901 2345"
                    className={clsx(
                      "h-11 w-full border border-gray-300 rounded-md px-3",
                      errors.cardNumber && "border-red-600"
                    )}
                  >
                    {(inputProps) => (
                      <Input
                        {...inputProps}
                        className={clsx(
                          "h-11",
                          errors.cardNumber && "border border-red-600"
                        )}
                      />
                    )}
                  </InputMask>
                </FormControl>
                <FormMessage className="text-xs font-light" />
              </FormItem>
            )}
          />

          <div className="w-full flex space-x-3">
            <FormField
              disabled={isLoading}
              control={control}
              name="expiryDate"
              render={({ field }) => (
                <FormItem className="w-full space-y-1">
                  <CastomLabel label="ММ/ГГ" error={!!errors.expiryDate} />
                  <FormControl>
                    <InputMask
                      mask="99/99"
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      disabled={field.disabled}
                      placeholder="12/34"
                      className={clsx(
                        "h-11 w-full border border-gray-300 rounded-md px-3",
                        errors.expiryDate && "border-red-600"
                      )}
                    >
                      {(inputProps) => (
                        <Input
                          {...inputProps}
                          className={clsx(
                            "h-11",
                            errors.expiryDate && "border border-red-600"
                          )}
                        />
                      )}
                    </InputMask>
                  </FormControl>
                  <FormMessage className="text-xs font-light" />
                </FormItem>
              )}
            />

            <FormField
              disabled={isLoading}
              control={control}
              name="cvv"
              render={({ field }) => (
                <FormItem className="w-full space-y-1">
                  <CastomLabel label="CVC/CVV" error={!!errors.cvv} />
                  <FormControl>
                    <Input
                      placeholder="123"
                      className={clsx(
                        "h-11",
                        errors.cvv && "border border-red-600"
                      )}
                      {...field}
                    />
                  </FormControl>
                  <FormMessage className="text-xs font-light" />
                </FormItem>
              )}
            />
          </div>
        </section>
        {errors.root && (
          <p className="text-red-600 text-sm text-center mt-2">
            {errors.root.message}
          </p>
        )}
        <section className="w-full px-2">
          <Button
            isDisabled={isLoading}
            type={ButtonTypes.SUBMIT}
            hoverEffect="darken"
            className={clsx("w-full flex justify-center")}
            rounded={ButtonRoundSizes.ROUNDED_2XL}
            bgColor={ButtonColors.TIFFANY}
          >
            {isLoading ? <Loader2 className="animate-spin" /> : "Оплатить"}
          </Button>
        </section>
      </form>
    </Form>
  );
};

export default PaymentCartForm;
