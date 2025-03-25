// @ts-nocheck 
import { Form, FormioProvider } from '@formio/react';
import { useState } from 'react';
import Swal from 'sweetalert2';

function getWeekdaysFromNowToNext3Months() {
  const today = new Date();
  const endDate = new Date();
  endDate.setMonth(today.getMonth() + 3);

  const dateList = [];
  let currentDate = new Date(today);
  currentDate.setDate(currentDate.getDate() + (7 + 14));
  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude Sundays (0) and Saturdays (6)
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();
      // dateList.push(`${day}-${month}-${year}`);
      dateList.push({ "label": `${day}.${month}.${year}`, "value": `${year}-${month}-${day}` });
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateList;
}

function getWeekdaysFromNowToNext3Months_() {
  const today = new Date();
  const endDate = new Date();
  endDate.setMonth(today.getMonth() + 3);

  const dateList = [];
  let currentDate = new Date(today);
  currentDate.setDate(currentDate.getDate() + 7);
  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.getDay();
    if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude Sundays (0) and Saturdays (6)
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0');
      const year = currentDate.getFullYear();
      // dateList.push(`${day}-${month}-${year}`);
      dateList.push({ "label": `${day}.${month}.${year}`, "value": `${year}-${month}-${day}` });
    }
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return dateList;
}

const Submission = () => {
  const [result, setResult] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const loadData = { data: {} };
  const urlParams = new URLSearchParams(window.location.search);
  loadData.data.artDerNachsendung = urlParams.get('artDerNachsendung');
  loadData.data.art = urlParams.get('art');
  loadData.data.zeitpunkt = urlParams.get('zeitpunkt');
  loadData.data.spatererStartzeitpunkt = urlParams.get('spatererStartzeitpunkt');
  loadData.data.wiederZustellenAb = urlParams.get('wiederZustellenAb');
  if (!loadData.data.spatererStartzeitpunkt)
    loadData.data.spatererStartzeitpunkt = getWeekdaysFromNowToNext3Months_()[0].value;


  const onLoadHandler = (sub: any) => {
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_title: "form",
        page_path: "/submission",
      });
    }
  };
  const onNextHandler = (sub: any) => {
    if (window.gtag) {
      window.gtag("event", "button_click", {
        button_name: "next",
      });
    }
  };
  const onSubmitHandler = (submission: any) => {
    setResult(submission);
    setSubmitted(true);
    
    if (window.gtag) {
      // window.gtag("event", "conversion", {
      //   send_to: "AW-16945727644/NRYoCLjr764aEJyRrZA_",
      //   value: 160,
      //   currency: "AED",
      //   transaction_id: submission._id,
      //   user_email: submission.data.eMailAdresse ? submission.data.eMailAdresse : submission.data.eMailAdresse1
      // });
      window.gtag("event", "conversion_event_purchase", {
        // value: 160,
        // currency: "AED",
        transaction_id: submission._id,
        user_email: submission.data.eMailAdresse ? submission.data.eMailAdresse : submission.data.eMailAdresse1
      });
      window.gtag('event', 'conversion', {
        'send_to': 'AW-16945727644/Y-kXCPPRsa8aEJyRrZA_',
        'transaction_id': submission._id
      });

    }
    window.location.href = "/success";
  }

  // 2 emails should be sent inoive & POW

  const de = {
    unsavedRowsError: 'Please save all rows before proceeding.',
    invalidRowsError: 'Please correct invalid rows before proceeding.',
    invalidRowError: 'Invalid row. Please correct it or delete.',
    invalidOption: '{{field}} is an invalid value.',
    invalidDay: '{{field}} is not a valid day.',
    alertMessageWithLabel: '{{label}}: {{message}}',
    alertMessage: '{{message}}',
    complete: 'Submission Complete',
    error: 'Please fix the following errors before submitting.',
    errorListHotkey: 'Press Ctrl + Alt + X to go back to the error list.',
    errorsListNavigationMessage: 'Click to navigate to the field with following error.',
    submitError: 'Please check the form and correct all errors before submitting.',
    required: '{{field}} is required',
    unique: '{{field}} must be unique',
    array: '{{field}} must be an array',
    array_nonempty: '{{field}} must be a non-empty array', // eslint-disable-line camelcase
    nonarray: '{{field}} must not be an array',
    select: '{{field}} contains an invalid selection',
    pattern: '{{field}} does not match the pattern {{pattern}}',
    minLength: '{{field}} must have at least {{length}} characters.',
    maxLength: '{{field}} must have no more than {{length}} characters.',
    minWords: '{{field}} must have at least {{length}} words.',
    maxWords: '{{field}} must have no more than {{length}} words.',
    min: '{{field}} cannot be less than {{min}}.',
    max: '{{field}} cannot be greater than {{max}}.',
    maxDate: '{{field}} should not contain date after {{maxDate}}',
    minDate: '{{field}} should not contain date before {{minDate}}',
    maxYear: '{{field}} should not contain year greater than {{maxYear}}',
    minYear: '{{field}} should not contain year less than {{minYear}}',
    minSelectedCount: 'You must select at least {{minCount}} items',
    maxSelectedCount: 'You may only select up to {{maxCount}} items',
    invalid_email: '{{field}} must be a valid email.', // eslint-disable-line camelcase
    invalid_url: '{{field}} must be a valid url.', // eslint-disable-line camelcase
    invalid_regex: '{{field}} does not match the pattern {{regex}}.', // eslint-disable-line camelcase
    invalid_date: '{{field}} is not a valid date.', // eslint-disable-line camelcase
    invalid_day: '{{field}} is not a valid day.', // eslint-disable-line camelcase
    invalidValueProperty: 'Invalid Value Property',
    mask: '{{field}} does not match the mask.',
    valueIsNotAvailable: '{{ field }} is an invalid value.',
    stripe: '{{stripe}}',
    month: 'Month',
    day: 'Day',
    year: 'Year',
    january: 'January',
    february: 'February',
    march: 'March',
    april: 'April',
    may: 'May',
    june: 'June',
    july: 'July',
    august: 'August',
    september: 'September',
    october: 'October',
    november: 'November',
    december: 'December',
    next: 'Next',
    previous: 'Previous',
    cancel: 'Cancel',
    submit: 'Submit Form',
    confirmCancel: 'Are you sure you want to cancel?',
    saveDraftInstanceError: 'Cannot save draft because there is no formio instance.',
    saveDraftAuthError: 'Cannot save draft unless a user is authenticated.',
    restoreDraftInstanceError: 'Cannot restore draft because there is no formio instance.',
    saveDraftError: 'Unable to save draft.',
    restoreDraftError: 'Unable to restore draft.',
    time: 'Invalid time',
    cancelButtonAriaLabel: 'Cancel button. Click to reset the form',
    previousButtonAriaLabel: 'Previous button. Click to go back to the previous tab',
    nextButtonAriaLabel: 'Next button. Click to go to the next tab',
    submitButtonAriaLabel: 'Submit Form button. Click to submit the form',
    reCaptchaTokenValidationError: 'ReCAPTCHA: Token validation error',
    reCaptchaTokenNotSpecifiedError: 'ReCAPTCHA: Token is not specified in submission',
    apiKey: 'API Key is not unique: {{key}}',
    typeRemaining: '{{ remaining }} {{ type }} remaining.',
    typeCount: '{{ count }} {{ type }}',
    requiredDayField: '{{ field }} is required',
    requiredDayEmpty: '{{ field }} is required',
    requiredMonthField: '{{ field }} is required',
    requiredYearField: '{{ field }} is required',
    formNotReady: 'Form not ready. Use form.ready promise',
    noFormElement: 'No DOM element for form.',
    notUniqueKey: 'API Key is not unique',
    newFormSchema: 'Form schema is for a newer version, please upgrade your renderer. Some functionality may not work.',
    missingUrl: 'Missing URL argument',
    urlNotAttachedToBtn: 'You should add a URL to this button.',
    loadingProjectSettingsError: 'Could not load project settings',
    sessionStorageSupportError: 'Session storage is not supported in this browser.',
    builderUniqueError: `You cannot add more than one {{componentKeyOrTitle}} component to one page.`,
    pageNotFound: 'Page not found',
    noDragInfoError: 'There is no Drag Info available for either dragged or sibling element',
    addonSupportTypeError: 'Addon {{label}} does not support component of type {{type}}',
    setPathError: 'Should not be setting the path of a component.',
    calculatedPathDeprecation: 'component.calculatedPath was deprecated, use component.path instead.',
    unknownTemplate: 'Unknown template: {{name}}',
    unknownComponent: 'Unknown component: {{type}}',
    renderTemplateFunctionDeprecation: `Form.io 'render' template function is deprecated.
      If you need to render template (template A) inside of another template (template B),
      pass pre-compiled template A (use this.renderTemplate('template_A_name') as template context variable for template B`,
    whenReadyDeprecation: 'The whenReady() method has been deprecated. Please use the dataReady property instead.',
    loadResourcesError: 'Unable to load resources for {{componentKey}}',
    noSelectDataConfiguration: 'Select component {{componentKey}} does not have data configuration.',
    indexedDBSupportError: "Your browser doesn't support current version of indexedDB",
    caretPositionSavingError: 'An error occurred while trying to save caret position',
    iteratableRowsError: 'Getter #iteratableRows() is not implemented',
    checkRowDeprecation: 'Deprecation Warning: checkRow method has been replaced with processRow',
    noOAuthBtn: 'You must add the OAuth button to a form for it to function properly',
    noOAuthConfiguration: 'OAuth not configured. You must configure oauth for your project before it will work.',
    oAuthErrorsTitle: 'The Following Error Has Occured',
    noOAuthFormUrl: 'You must attach a Form API url to your form in order to use OAuth buttons.',
    oAuthStateError: 'OAuth state does not match. Please try logging in again.',
    componentInvalidRowValidation: 'Invalid row validation for {{componentKey}}',
    videoPlayerNotFound: 'Video player not found in template.',
    synchronizationFailed: 'Synchronization is failed',
    fileWithDuplicatedNameInProgress: 'File with the same name is already being uploaded',
    fileWithDuplicatedNameLoaded: 'File with the same name is already uploaded',
    nestedForm: 'Nested form',
    noDataProvided: 'No data provided',
    subformSubmissionLoadingError: 'Unable to load subform submission {{submissionId}}:',
    noDelimiterSet: 'In order for thousands separator to work properly, you must set the delimiter to true in the component json',
    noSiteKey: 'There is no Site Key specified in settings in form JSON',
    failedToNormalize: 'Failed to normalize value',
    failedToCompareItems: 'Error while comparing items',
    editorFocusError: 'An editor did not initialize properly when trying to focus:',
    quillImageUploadFailed: 'Quill image upload failed',
    noFilesSelected: 'No files selected',
    needConfigurationForQuill: 'The WYSIWYG settings are configured for CKEditor. For this renderer, you will need to use configurations for the Quill Editor. See https://quilljs.com/docs/configuration for more information.',
    waitPdfConverting: 'Converting PDF. Please wait.',
    uploading: 'Uploading',
    pasteBelow: 'Paste below',
    copy: 'Copy',
    move: 'Move',
    edit: 'Edit',
    editJson: 'Edit JSON',
    remove: 'Remove',
    clickToSetValue: 'Click to set value',
    words: 'words',
    characters: 'characters',
    addAnother: 'Add Another',
    yes: 'Yes',
    no: 'No',
    wantToClearData: 'Do you want to clear data?',
    yesDelete: 'Yes, delete it',
    waitFileProcessing: 'Processing file. Please wait...',
    wrongFileType: 'File is the wrong type; it must be {{ pattern }}',
    fileTooSmall: 'File is too small; it must be at least {{ size }}',
    fileTooBig: 'File is too big; it must be at most {{ size }}',
    noFileService: 'File Service not provided.',
    fileProcessingFailed: 'File processing has been failed.',
    readyForUpload: 'Ready to be uploaded into storage',
    readyForRemovingFromStorage: 'Ready to be removed from storage',
    preparingFileToRemove: 'Preparing file to remove',
    succefullyRemoved: 'Succefully removed',
    succefullyUploaded: 'Succefully uploaded',
    maxSelectItems: 'You may only select up to {{maxCount}} items',
    minSelectItems: 'You must select at least {{minCount}} items',
    clickToSign: 'Click to Sign',
    surveyQuestion: 'Question',
    surveyQuestionValue: 'Value',
    success: 'Success',
    noResultsFound: 'No results found',
    noChoices: 'No choices to choose from',
    typeToSearch: 'Type to search',
    loading: 'Loading',

    error: "Bitte vervollständigen sie die Pflichtfelder.",
    submitError: "Bitte vervollständigen sie die Pflichtfelder.",
    invalid_date: "{{field}} is not a valid date.",
    invalid_email: "{{field}} muss eine gültige E-Mail-Adresse sein.",
    invalid_regex: "{{field}} does not match the pattern {{regex}}.",
    mask: "{{field}} does not match the mask.",
    max: "{{field}} cannot be greater than {{max}}.",
    maxLength: "{{field}} must be shorter than {{length}} characters.",
    min: "{{field}} cannot be less than {{min}}.",
    minLength: "{{field}} must be longer than {{length}} characters.",
    next: "Weiter",
    pattern: "{{field}} does not match the pattern {{pattern}}",
    previous: "Vorherige",
    required: "{{field}} ist erforderlich"
  };

  return (
    <>
      <div>
        <Form src="https://formio.nachsendeauftrag-buchen.de/postnachsendeauftrag" onFormLoad={ onLoadHandler } onSubmit={onSubmitHandler} onNextPage={onNextHandler} submission={loadData} options={{
          language: 'de',
          i18n: {
            de: de
          }
        }} />
      </div>
    </>
  );
};

export default Submission;
