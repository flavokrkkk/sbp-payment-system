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

const PaymentCartForm = () => {
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
    handleSubmit,
  } = form;

  const { handleEncryptedPayData } = usePaymentByCard();

  const onFormSubmit = async (values: CardFormData) => {
    const { deviceData, encryptedData } = await handleEncryptedPayData(values);

    if (deviceData && encryptedData) {
      console.log({ deviceData, encryptedData });
      reset();
    }
  };

  return (
    <Form {...form}>
      <form
        className={clsx(
          "rounded-3xl w-full flex justify-center items-center flex-col space-y-6"
        )}
        onSubmit={handleSubmit(onFormSubmit)}
      >
        <section
          className="border-2 border-dashed border-[#CFDBFB] p-5 flex flex-col space-y-5"
          style={{
            position: "relative",
            borderRadius: "30px",
            backgroundClip: "padding-box",
          }}
        >
          <FormField
            control={control}
            name="cardName"
            render={({ field }) => (
              <FormItem className="w-full space-y-1">
                <CastomLabel label="Имя на карте" error={!!errors.cardName} />
                <FormControl>
                  <Input
                    placeholder="IVAN IVANOV"
                    className={clsx(
                      "h-11",
                      errors.cardName && "border border-red-600"
                    )}
                    {...field}
                  />
                </FormControl>
                <FormMessage className="text-xs font-light" />
              </FormItem>
            )}
          />

          <FormField
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
                          errors.cardName && "border border-red-600"
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
                            errors.cardName && "border border-red-600"
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

        <section className="w-full px-2">
          <Button
            type={ButtonTypes.SUBMIT}
            className={"w-full flex justify-center"}
            rounded={ButtonRoundSizes.ROUNDED_2XL}
            bgColor={ButtonColors.TIFFANY}
          >
            Оплатить
          </Button>
        </section>
      </form>
    </Form>
  );
};

export default PaymentCartForm;
