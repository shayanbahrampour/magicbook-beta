<template>
  <v-card class="d-flex justify-center align-center rtl">
    <div class="pa-6">
      <h1 class="f-20 text-center grey--text text--darken-4" style="line-height: 1.8">
        وب اپلیکیشن مجیک بوک را به صفحه اصلی موبایل خود اضافه کنید.
      </h1>
      <v-divider class="lightBlue my-4" />
      <v-card-text class="py-0 grey--text text--darken-4 f-15" style="line-height: 1.8">
        <div class="d-flex align-center py-1 rtl">
          <v-img alt="" contain src="/images/ios-help/step-1.png" width="42" />

          <div class="flex-grow-1 pr-3">
            1- در نوار پایین مرورگر سافاری، روی آیکون
            <b> Share </b>
            کلیک کنید.
          </div>
        </div>

        <div class="d-flex align-center py-1 rtl">
          <v-img alt="" contain src="/images/ios-help/step-2.png" width="42" />

          <div class="flex-grow-1 pr-3">
            2- در منوی باز شده و در پایین، گزینه
            <b class="text-truncate"> Add to Home Screen </b>
            را انتخاب کنید.
          </div>
        </div>

        <div class="d-flex align-center py-1 rtl">
          <v-img alt="" contain src="/images/ios-help/step-3.png" width="42" />

          <div class="flex-grow-1 pr-3">
            3- در مرحله بعد در قسمت باز شده جدید روی
            <b> Add </b>
            کلیک کنید.
          </div>
        </div>
      </v-card-text>
      <v-divider class="lightBlue mt-4 mb-6" />
      <v-btn block class="f-16" color="primary" depressed height="50" @click="$emit('submit')">باشه</v-btn>
    </div>
  </v-card>
</template>
