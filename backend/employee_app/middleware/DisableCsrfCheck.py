from django.utils.deprecation import MiddlewareMixin # type: ignore

class DisableCsrfCheck(MiddlewareMixin):
    def process_view(self, request, callback, callback_args, callback_kwargs):
        if request.method == 'POST':
            request.META['CSRF_COOKIE_USED'] = False
            request._dont_enforce_csrf_checks = True