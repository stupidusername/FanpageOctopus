from configparser import ConfigParser
from pathlib import Path


class Config(object):
    """
    This class provides access to the app configuration.
    """

    def __init__(self):
        self._config = ConfigParser()
        self._config.read(Path('config.ini'))

    def get_facebook_username(self) -> str:
        """
        :returns: Facebook user.
        """
        return self._config['DEFAULT']['facebook_username']

    def get_facebook_password(self) -> str:
        """
        :returns: Facebook password.
        """
        return self._config['DEFAULT']['facebook_password']

    def get_fanpage_path(self) -> str:
        """
        :returns: Facebook fanpage path.
        """
        return self._config['DEFAULT']['fanpage_path']
